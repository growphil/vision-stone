export interface CompanyInfo {
  name: string;
  tagline: string;
  rootsYear: string;
  rootsStatement: string;
  clientCount: string;
  location: {
    city: string;
    state: string;
    country: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    website: string;
  };
  mission: string;
  vision: string;
  coreValues: {
    name: string;
    description: string;
  }[];
  whyUs: {
    number: string;
    title: string;
    description: string;
  }[];
  howWeWork: {
    step: string;
    title: string;
    description: string;
  }[];
  historyTimeline: {
    year?: string;
    title: string;
    description: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "VISION STONES",
  tagline: "Mineral Manufacturing & Raw-Material Supply",
  rootsYear: "1997",
  rootsStatement: "Manufacturing roots dating back to 1997.",
  clientCount: "450+",
  location: {
    city: "Tirunelveli",
    state: "Tamil Nadu",
    country: "India",
    full: "Tirunelveli, Tamil Nadu, India",
  },
  contact: {
    phone: "8300685057",
    phoneDisplay: "+91 83006 85057",
    email: "visionstones.22@gmail.com",
    website: "visionstones.in",
  },
  mission:
    "To manufacture and supply reliable mineral and raw-material products that meet customer requirements while building long-term relationships through clear communication, responsive service and dependable supply.",
  vision:
    "To develop Vision Stones into a trusted mineral manufacturing and raw-material supply brand, building on our manufacturing roots since 1997 and serving customers across India and, over time, international markets.",
  coreValues: [
    {
      name: "Reliability",
      description: "Consistent delivery of confirmed product grades, mesh sizes, and schedules without compromise.",
    },
    {
      name: "Quality",
      description: "Meeting agreed specifications and particle size requirements on every dispatch.",
    },
    {
      name: "Responsiveness",
      description: "Prompt attention to customer enquiries, sample requests, and evolving delivery timelines.",
    },
    {
      name: "Flexibility",
      description: "Adapting particle size, packaging, and order quantities to specific industrial processes.",
    },
    {
      name: "Integrity",
      description: "Straightforward communication regarding product availability, lead times, and supply commitments.",
    },
    {
      name: "Long-Term Partnerships",
      description: "Cultivating enduring commercial relationships founded on mutual trust and dependable supply.",
    },
  ],
  whyUs: [
    {
      number: "01",
      title: "MANUFACTURING ROOTS SINCE 1997",
      description: "Over two decades of production and processing experience supporting dependable mineral supply.",
    },
    {
      number: "02",
      title: "450+ CLIENTS",
      description: "Proven supply relationships across industrial, manufacturing, and agricultural sectors.",
    },
    {
      number: "03",
      title: "MANUFACTURING INFRASTRUCTURE",
      description: "Dedicated processing facilities, industrial equipment, and managed production operations in Tirunelveli.",
    },
    {
      number: "04",
      title: "MODERN BRAND DIRECTION",
      description: "Taking established industrial capabilities forward with clear digital transparency and professional communication.",
    },
    {
      number: "05",
      title: "FLEXIBLE SUPPLY",
      description: "Catering to small trial batches, customized grades, and continuous bulk recurring dispatches.",
    },
    {
      number: "06",
      title: "MULTIPLE PRODUCTS",
      description: "Comprehensive mineral portfolio spanning Dolomite, Limestone, Lime, Calcite, Calcium Carbonate, and more.",
    },
    {
      number: "07",
      title: "DIRECT COMMUNICATION",
      description: "Direct engagement with manufacturing and supply coordinators for fast requirement clarity.",
    },
    {
      number: "08",
      title: "LONG-TERM RELATIONSHIPS",
      description: "Focused on sustaining stable recurring supply agreements and enduring partnerships.",
    },
  ],
  howWeWork: [
    {
      step: "01",
      title: "UNDERSTAND",
      description: "Understand the customer's application, product requirement, specification and quantity.",
    },
    {
      step: "02",
      title: "CONFIRM",
      description: "Review product availability, specifications and production requirements.",
    },
    {
      step: "03",
      title: "COORDINATE",
      description: "Coordinate production, packaging and supply.",
    },
    {
      step: "04",
      title: "SUPPLY",
      description: "Prepare and supply according to the agreed arrangement.",
    },
    {
      step: "05",
      title: "BUILD",
      description: "Develop successful orders into long-term customer relationships.",
    },
  ],
  historyTimeline: [
    {
      year: "1997",
      title: "MANUFACTURING JOURNEY BEGINS",
      description: "Our industrial roots commenced with core mineral sourcing, local processing, and initial commercial dispatches.",
    },
    {
      title: "MINERAL PROCESSING EXPANSION",
      description: "Acquisition of specialized crushing, pulverizing, and grading machinery to handle multi-mineral product lines.",
    },
    {
      title: "PRODUCTION EXPERIENCE & CONSISTENCY",
      description: "Decades of continuous production refining mesh control, handling properties, and customer-specific grading.",
    },
    {
      title: "MANUFACTURING INFRASTRUCTURE",
      description: "Consolidation of dedicated processing yards, storage, and material handling systems in Tirunelveli, Tamil Nadu.",
    },
    {
      title: "CUSTOMER RELATIONSHIPS (450+ CLIENTS)",
      description: "Expanding delivery to over 450 clients across diverse industrial sectors requiring dependable mineral raw materials.",
    },
    {
      title: "VISION STONES — THE NEXT STAGE",
      description: "Unifying our established manufacturing infrastructure, roots, and experience under the modern Vision Stones brand.",
    },
  ],
};
