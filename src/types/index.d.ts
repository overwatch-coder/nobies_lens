export type PhotoCategory =
  | "all"
  | "corporate"
  | "portraits"
  | "creative"
  | "graduation"
  | "lifestyle";

export interface Photo {
  url: string;
  category: PhotoCategory[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string | React.ForwardRefExoticComponent<LucideProps>;
  color: string;
  id: string;
}

export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  icon: string | React.ForwardRefExoticComponent<LucideProps>;
  questions: FAQQuestion[];
}

export interface SocialLinks {
  whatsapp: {
    link: string;
    text: string;
    prefix: string;
  };
  email: {
    link: string;
    text: string;
  };
  phone: {
    link: string;
    text: string;
  };
  instagram: {
    link: string;
    text: string;
  };
  linkedin: {
    link: string;
    text: string;
  };
  address: {
    full: string;
    short: string;
    website?: string;
    addr1?: string;
    addr2?: string;
    city: string;
    state?: string;
    zip?: string;
    country?: string;
  };
}

export type ServiceType =
  | "corporate"
  | "portraits"
  | "graduation"
  | "lifestyle";

export interface ServiceData {
  title: string;
  description: string;
  color: string;
  images: string[];
  pricing: {
    basic: { name: string; price: string; hours: string; photos: string };
    professional: {
      name: string;
      price: string;
      hours: string;
      photos: string;
    };
    premium: { name: string; price: string; hours: string; photos: string };
  };
  benefits: string[];
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  icon: string | React.ForwardRefExoticComponent<LucideProps>;
  features: string[];
  popular: boolean;
}
