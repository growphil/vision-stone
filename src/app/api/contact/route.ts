import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter: IP -> timestamps array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

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
          error: "Too many requests. Please try again later or contact us via WhatsApp.",
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
      requirement,
      hp, // Honeypot field
    } = body || {};

    // 3. Honeypot check for spam prevention
    if (hp) {
      // Silently accept honeypot submissions to fool bots
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 4. Server-Side Input Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
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
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "visionstones.22@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Vision Stones <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is currently unconfigured.",
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

    const plainTextBody = `VISION STONES
NEW WEBSITE ENQUIRY

CONTACT DETAILS
----------------
Name: ${name.trim()}
Company: ${company ? company.trim() : "Not Specified"}
Phone: ${phone.trim()}
Email: ${email.trim()}

ENQUIRY
----------------
Product: ${product ? product.trim() : "Not Specified"}
Quantity: ${quantity ? quantity.trim() : "Not Specified"}
Location: ${location ? location.trim() : "Not Specified"}

REQUIREMENT
----------------
Message: ${requirement ? requirement.trim() : "Direct Business Enquiry"}

SOURCE
----------------
Website Chatbot

Timestamp: ${timestamp}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 24px; border-radius: 8px;">
        <h2 style="color: #E52323; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">VISION STONES</h2>
        <h3 style="margin-bottom: 20px; color: #333;">NEW WEBSITE ENQUIRY</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f7f7f7;"><td colspan="2" style="padding: 8px; font-weight: bold; border-bottom: 2px solid #E52323;">CONTACT DETAILS</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; width: 35%;">Name:</td><td style="padding: 8px;">${name.trim()}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company ? company.trim() : "Not Specified"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${phone.trim()}">${phone.trim()}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f7f7f7;"><td colspan="2" style="padding: 8px; font-weight: bold; border-bottom: 2px solid #E52323;">ENQUIRY SPECIFICATIONS</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; width: 35%;">Product:</td><td style="padding: 8px;">${product ? product.trim() : "Not Specified"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Quantity:</td><td style="padding: 8px;">${quantity ? quantity.trim() : "Not Specified"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Location:</td><td style="padding: 8px;">${location ? location.trim() : "Not Specified"}</td></tr>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f7f7f7;"><td colspan="2" style="padding: 8px; font-weight: bold; border-bottom: 2px solid #E52323;">REQUIREMENT / MESSAGE</td></tr>
          <tr><td colspan="2" style="padding: 12px; line-height: 1.5; white-space: pre-wrap;">${requirement ? requirement.trim() : "Direct Business Enquiry"}</td></tr>
        </table>

        <div style="font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 12px;">
          <strong>Source:</strong> Website Chatbot &bull; <strong>Timestamp:</strong> ${timestamp}
        </div>
      </div>
    `;

    // 7. Initialize Resend & Dispatch Email
    const resend = new Resend(resendApiKey);

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: email.trim(),
      subject: `New Website Enquiry — Vision Stones (${name.trim()})`,
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
        error: "Internal server error processing enquiry.",
      },
      { status: 500 }
    );
  }
}
