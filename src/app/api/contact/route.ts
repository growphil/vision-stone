import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter: IP -> timestamps array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside current window
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later or contact us directly via WhatsApp / Phone.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Request Body
    const body = await req.json();
    const {
      name,
      company,
      phone,
      email,
      product,
      quantity,
      location,
      deliveryLocation,
      meshSpecification,
      application,
      packaging,
      deliveryDate,
      orderType,
      requirement,
      additionalNotes,
      source = "Website Contact Form",
      intent = "quote",
      hp, // Honeypot field
    } = body || {};

    // 3. Honeypot check for spam prevention
    if (hp) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 4. Server-Side Input Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Contact Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "Valid phone number is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required." },
        { status: 400 }
      );
    }

    // 5. Read Resend Config from Environment
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL?.trim() || "sales@visionstones.in";
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "Vision Stones <sales@visionstones.in>";

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured (missing RESEND_API_KEY).",
        },
        { status: 500 }
      );
    }

    // 6. Format Email Content
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const isSample = intent === "sample";
    const emailSubject = `${isSample ? "🧪 Sample Request" : "📋 Quote Enquiry"} — Vision Stones (${name.trim()})`;
    const resolvedLocation = deliveryLocation || location || "Not Specified";
    const notes = additionalNotes || requirement || "Direct Commercial Enquiry";

    const plainTextBody = `VISION STONES
${isSample ? "SAMPLE REQUEST" : "NEW COMMERCIAL ENQUIRY"}
--------------------------------------------------
Source: ${source}
Timestamp: ${timestamp}

1. CONTACT DETAILS
-------------------
Name: ${name.trim()}
Company: ${company ? company.trim() : "Not Specified"}
Phone: ${phone.trim()}
Email: ${email.trim()}

2. MINERAL SPECIFICATIONS & SUPPLY
----------------------------------
Product: ${product ? product.trim() : "Not Specified"}
Quantity / Volume: ${quantity ? quantity.trim() : "Not Specified"}
Mesh / Particle Size: ${meshSpecification ? meshSpecification.trim() : "Standard"}
Intended Application: ${application ? application.trim() : "Not Specified"}
Packaging: ${packaging ? packaging.trim() : "Standard Bags"}
Delivery Location: ${resolvedLocation}
Required Delivery Date: ${deliveryDate ? deliveryDate.trim() : "Immediate / Standard"}
Order Type: ${orderType ? orderType.trim() : "Commercial Order"}

3. ADDITIONAL NOTES / TOLERANCES
--------------------------------
${notes}
`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #111111; max-width: 620px; margin: 0 auto; border: 1px solid #E5E5E0; border-radius: 8px; overflow: hidden; background: #FFFFFF;">
        
        <div style="background-color: #111111; padding: 24px; color: #FFFFFF; border-bottom: 3px solid #E52323;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1.5px; text-transform: uppercase; color: #FFFFFF;">VISION STONES</h2>
          <div style="font-size: 13px; color: #E52323; font-weight: bold; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
            ${isSample ? "🧪 Sample Request Submitted" : "📋 Commercial Quote Enquiry"}
          </div>
        </div>

        <div style="padding: 24px;">
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #FAF9F6;"><td colspan="2" style="padding: 10px 12px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #E52323;">01 / Contact Information</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; width: 35%; color: #666; font-size: 13px;">Name:</td><td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #111;">${name.trim()}</td></tr>
            <tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Company:</td><td style="padding: 8px 12px; font-size: 13px; color: #111;">${company ? company.trim() : "Not Specified"}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Phone:</td><td style="padding: 8px 12px; font-size: 13px;"><a href="tel:${phone.trim()}" style="color: #E52323; text-decoration: none; font-weight: bold;">${phone.trim()}</a></td></tr>
            <tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Email:</td><td style="padding: 8px 12px; font-size: 13px;"><a href="mailto:${email.trim()}" style="color: #111; text-decoration: underline;">${email.trim()}</a></td></tr>
          </table>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #FAF9F6;"><td colspan="2" style="padding: 10px 12px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #E52323;">02 / Mineral Specifications</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; width: 35%; color: #666; font-size: 13px;">Product:</td><td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #111;">${product ? product.trim() : "Not Specified"}</td></tr>
            <tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Quantity / Volume:</td><td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #E52323;">${quantity ? quantity.trim() : "Not Specified"}</td></tr>
            ${meshSpecification ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Mesh / Sizing:</td><td style="padding: 8px 12px; font-size: 13px;">${meshSpecification.trim()}</td></tr>` : ""}
            ${application ? `<tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Application:</td><td style="padding: 8px 12px; font-size: 13px;">${application.trim()}</td></tr>` : ""}
            ${packaging ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Packaging:</td><td style="padding: 8px 12px; font-size: 13px;">${packaging.trim()}</td></tr>` : ""}
            ${resolvedLocation !== "Not Specified" ? `<tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Delivery Location:</td><td style="padding: 8px 12px; font-size: 13px; font-weight: bold;">${resolvedLocation}</td></tr>` : ""}
            ${deliveryDate ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Delivery Date:</td><td style="padding: 8px 12px; font-size: 13px;">${deliveryDate.trim()}</td></tr>` : ""}
            ${orderType ? `<tr style="background-color: #FAFAFA;"><td style="padding: 8px 12px; font-weight: bold; color: #666; font-size: 13px;">Order Type:</td><td style="padding: 8px 12px; font-size: 13px;">${orderType.trim()}</td></tr>` : ""}
          </table>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #FAF9F6;"><td colspan="2" style="padding: 10px 12px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #E52323;">03 / Requirement & Notes</td></tr>
            <tr><td colspan="2" style="padding: 12px; line-height: 1.6; font-size: 13px; color: #222; white-space: pre-wrap; background: #FAF9F6; border-radius: 4px;">${notes}</td></tr>
          </table>

          <div style="font-size: 11px; color: #888888; border-top: 1px solid #EEEEEE; padding-top: 12px; display: flex; justify-content: space-between;">
            <span><strong>Source:</strong> ${source}</span>
            <span><strong>Timestamp:</strong> ${timestamp}</span>
          </div>
        </div>
      </div>
    `;

    // 7. Initialize Resend & Dispatch Email
    const resend = new Resend(resendApiKey);

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: email.trim(),
      subject: emailSubject,
      text: plainTextBody,
      html: htmlBody,
    });

    if (sendError) {
      console.error("Resend API Error:", sendError);
      return NextResponse.json(
        {
          success: false,
          error: sendError.message || "Failed to deliver email through Resend.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error: any) {
    console.error("Contact API Route Handler Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error processing enquiry.",
      },
      { status: 500 }
    );
  }
}
