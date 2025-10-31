import type {
  FAQCategory,
  Photo,
  PhotoCategory,
  PricingPackage,
  Service,
  ServiceData,
  ServiceType,
  SocialLinks,
  Testimonial,
} from "@/types";
import {
  Camera,
  Users,
  Award,
  Star,
  Clock,
  CreditCard,
  MapPin,
} from "lucide-react";

const portraitImages = Array.from({ length: 11 }, (_, index) => {
  return `/portrait/portrait_${index + 1}.jpg`;
});

const lifestyleImages = Array.from({ length: 9 }, (_, index) => {
  return `/lifestyle/lifestyle_${index + 1}.jpg`;
});

const graduationImages = Array.from({ length: 23 }, (_, index) => {
  return `/graduation/graduation_${index + 1}.jpg`;
});

const corporateImages = Array.from({ length: 26 }, (_, index) => {
  return `/corporate/corporate_${index + 1}.jpg`;
});

export const heroImages: string[] = [
  "/corporate/corporate_2.jpg",
  "/lifestyle/lifestyle_1.jpg",
  "/portrait/portrait_3.jpg",
  "/portrait/portrait_11.jpg",
];

export const categories: PhotoCategory[] = [
  "all",
  "corporate",
  "portraits",
  "graduation",
  "lifestyle",
];

export const services: Service[] = [
  {
    title: "Corporate Events",
    description:
      "Professional coverage of conferences, seminars, and corporate gatherings",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    id: "corporate",
  },
  {
    title: "Studio & Outdoor Portraits",
    description:
      "Timeless portraits in controlled studio settings or natural outdoor environments",
    icon: Camera,
    color: "from-gold/90 to-teal-500",
    id: "portraits",
  },
  {
    title: "Graduation Photoshoots",
    description:
      "Capture your milestone achievement with stunning graduation portraits",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    id: "graduation",
  },
  {
    title: "Lifestyle Photoshoot",
    description:
      "Authentic moments that tell your unique story in everyday settings",
    icon: Star,
    color: "from-violet-500 to-purple-500",
    id: "lifestyle",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Corporate Client",
    content:
      "Exceptional professionalism and creativity. They captured our corporate event perfectly!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Graduate",
    content:
      "My graduation photos exceeded all expectations. Beautiful work and great experience!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Portrait Client",
    content:
      "The outdoor portrait session was amazing. They made me feel comfortable and the results are stunning!",
    rating: 5,
  },
];

// Create structured photo arrays
const corporatePhotos = corporateImages.map((image) => ({
  url: image,
  category: ["all", "corporate"] as PhotoCategory[],
}));

const portraitPhotos = portraitImages.map((image) => ({
  url: image,
  category: ["all", "portraits"] as PhotoCategory[],
}));

const lifestylePhotos = lifestyleImages.map((image) => ({
  url: image,
  category: ["all", "lifestyle"] as PhotoCategory[],
}));

const graduationPhotos = graduationImages.map((image) => ({
  url: image,
  category: ["all", "graduation"] as PhotoCategory[],
}));

const topCorporate = corporatePhotos.slice(0, 3);
const topPortrait = portraitPhotos.slice(0, 3);
const topLifestyle = lifestylePhotos.slice(0, 3);
const topGraduation = graduationPhotos.slice(0, 3);

const remainingPhotos = [
  ...corporatePhotos.slice(3),
  ...portraitPhotos.slice(3),
  ...lifestylePhotos.slice(3),
  ...graduationPhotos.slice(3),
];

export const allPhotos: Photo[] = [
  ...topCorporate,
  ...topPortrait,
  ...topGraduation,
  ...topLifestyle,
  ...remainingPhotos,
];

export const faqCategories: FAQCategory[] = [
  {
    category: "Booking & Scheduling",
    icon: Clock,
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 2-3 weeks in advance for portrait sessions and 1-2 months for events and weddings. However, we do our best to accommodate last-minute requests when possible.",
      },
      {
        question: "Can I reschedule my photoshoot?",
        answer:
          "Yes! We understand that plans change. You can reschedule up to 48 hours before your session without any penalty. Cancellations made within 48 hours may be subject to a rescheduling fee.",
      },
      {
        question: "What happens if it rains on the day of an outdoor shoot?",
        answer:
          "Don't worry! We always have a backup plan. We can either reschedule to another day or move to an indoor location. We'll discuss the best option based on your preferences and our schedule.",
      },
      {
        question: "How long does a typical photoshoot last?",
        answer:
          "Session length varies by package. Basic sessions are 1 hour, Professional packages include 3 hours, and Premium packages offer full-day coverage. We can also customize the duration to fit your needs.",
      },
    ],
  },
  {
    category: "Photos & Delivery",
    icon: Camera,
    questions: [
      {
        question: "When will I receive my photos?",
        answer:
          "Basic packages: 1-2 weeks. Professional packages: 1 week with same-day preview. Premium packages: 24-48 hours. Rush delivery is available for an additional fee.",
      },
      {
        question: "How many photos will I receive?",
        answer:
          "The number varies by package: Basic (up to 50), Professional (up to 150), and Premium (unlimited). All photos are professionally edited and color-corrected.",
      },
      {
        question: "Can I request specific editing styles?",
        answer:
          "We offer various editing styles including natural, dramatic, vintage, and black & white. During your consultation, we'll discuss your preferred aesthetic and show you examples.",
      },
      {
        question: "Will I receive the raw, unedited photos?",
        answer:
          "Our packages include professionally edited photos only. However, raw files can be purchased separately for an additional fee of $200 per session.",
      },
      {
        question: "How will I receive my photos?",
        answer:
          "Photos are delivered through a private online gallery where you can view, download, and share your images. High-resolution downloads are included based on your package.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, debit cards, bank transfers, and PayPal. A 50% deposit is required to secure your booking, with the remainder due on the day of the shoot.",
      },
      {
        question: "Is there a cancellation fee?",
        answer:
          "Cancellations made more than 48 hours in advance receive a full refund of the deposit. Cancellations within 48 hours forfeit 50% of the deposit. Same-day cancellations forfeit the entire deposit.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes! For Premium packages, we offer split payment options. Contact us to discuss a payment plan that works for your budget.",
      },
      {
        question: "Are there any additional costs I should know about?",
        answer:
          "Package prices are all-inclusive for the services listed. Additional costs may include travel fees for locations beyond 30 miles, rush delivery, and extra photographers or hours.",
      },
    ],
  },
  {
    category: "Location & Studio",
    icon: MapPin,
    questions: [
      {
        question: "Do you have a studio?",
        answer:
          "Yes! Our professional studio is located at 123 Photography Lane, Creative District. It's fully equipped with professional lighting, backdrops, and props for all types of shoots.",
      },
      {
        question: "Can you shoot at my location?",
        answer:
          "We offer on-location photography for all packages. For locations within 30 miles, there's no additional charge. Travel fees apply for locations beyond that.",
      },
      {
        question: "What should I bring to the photoshoot?",
        answer:
          "Bring any outfits you'd like to wear, props that are meaningful to you, and any makeup/hair styling items. We'll provide guidance during your consultation call.",
      },
      {
        question: "Can I bring friends or family?",
        answer:
          "Yes! You're welcome to bring guests for support. However, for the best results, we limit the number of people giving direction during the shoot to avoid confusion.",
      },
    ],
  },
];

export const socialLinks: SocialLinks = {
  whatsapp: {
    link: "https://wa.me/212706633200",
    text: "212706633200",
    prefix: "+",
  },
  email: {
    link: "mailto:info@nobieslens.com",
    text: "info@nobieslens.com",
  },
  phone: {
    link: "tel:+212706633200",
    text: "+212 706 633 200",
  },
  instagram: {
    link: "https://instagram.com/nobies_lens",
    text: "@nobies_lens",
  },
  linkedin: {
    link: "https://linkedin.com/company/nobies_lens",
    text: "@nobies_lens",
  },
  address: {
    full: "123 Photography Lane, Creative District, Morocco",
    short: "123 Photography Lane, New York, NY 10001",
    website: "https://nobieslens.com",
    addr1: "123 Photography Lane",
    addr2: "Creative District, CD 12345",
    city: "New York",
    country: "Morocco",
    zip: "10001",
  },
};

export const serviceData: Record<ServiceType, ServiceData> = {
  corporate: {
    title: "Corporate Events",
    description:
      "Professional photography coverage for your corporate events, conferences, and business gatherings",
    color: "from-blue-500 to-cyan-500",
    images: corporateImages,
    pricing: {
      basic: {
        name: "Basic",
        price: "$499",
        hours: "2 hours",
        photos: "Up to 100 photos",
      },
      professional: {
        name: "Professional",
        price: "$899",
        hours: "4 hours",
        photos: "Up to 300 photos",
      },
      premium: {
        name: "Premium",
        price: "$1,499",
        hours: "Full day",
        photos: "Unlimited photos",
      },
    },
    benefits: [
      "Professional event coverage from start to finish",
      "Multiple photographers for large events",
      "Same-day preview gallery",
      "High-resolution downloads included",
      "Professional editing and color correction",
      "Printed photo album option",
      "Commercial usage rights",
      "Rush delivery available",
    ],
  },
  portraits: {
    title: "Studio & Outdoor Portraits",
    description:
      "Timeless portrait photography in our professional studio or your preferred outdoor location",
    color: "from-gold/90 to-teal-500",
    images: portraitImages,
    pricing: {
      basic: {
        name: "Basic",
        price: "$199",
        hours: "1 hour",
        photos: "Up to 50 photos",
      },
      professional: {
        name: "Professional",
        price: "$399",
        hours: "2 hours",
        photos: "Up to 150 photos",
      },
      premium: {
        name: "Premium",
        price: "$699",
        hours: "3 hours",
        photos: "Up to 250 photos",
      },
    },
    benefits: [
      "Professional studio with premium lighting",
      "Outdoor location options available",
      "Multiple outfit changes included",
      "Professional styling consultation",
      "Advanced retouching and editing",
      "Digital gallery with sharing options",
      "Print-ready files provided",
      "Satisfaction guarantee",
    ],
  },
  graduation: {
    title: "Graduation Photoshoots",
    description:
      "Capture your milestone achievement with stunning graduation portraits and celebration photos",
    color: "from-amber-500 to-orange-500",
    images: graduationImages,
    pricing: {
      basic: {
        name: "Basic",
        price: "$249",
        hours: "1 hour",
        photos: "Up to 60 photos",
      },
      professional: {
        name: "Professional",
        price: "$449",
        hours: "2 hours",
        photos: "Up to 150 photos",
      },
      premium: {
        name: "Premium",
        price: "$749",
        hours: "3 hours",
        photos: "Up to 300 photos",
      },
    },
    benefits: [
      "Cap and gown photography included",
      "Family group photos",
      "Candid celebration moments",
      "Professional retouching",
      "Digital and print options",
      "Graduation album design",
      "Fast turnaround time",
      "Discounts for group bookings",
    ],
  },
  lifestyle: {
    title: "Lifestyle Photoshoots",
    description:
      "Authentic moments that tell your unique story in everyday settings and natural environments",
    color: "from-violet-500 to-purple-500",
    images: lifestyleImages,
    pricing: {
      basic: {
        name: "Basic",
        price: "$199",
        hours: "1 hour",
        photos: "Up to 50 photos",
      },
      professional: {
        name: "Professional",
        price: "$399",
        hours: "2 hours",
        photos: "Up to 150 photos",
      },
      premium: {
        name: "Premium",
        price: "$699",
        hours: "3 hours",
        photos: "Up to 250 photos",
      },
    },
    benefits: [
      "Natural and candid photography style",
      "Multiple location options",
      "Family and group sessions",
      "Authentic storytelling approach",
      "Lifestyle editing style",
      "Digital gallery included",
      "Print packages available",
      "Flexible scheduling",
    ],
  },
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for personal photoshoots",
    icon: Camera,
    features: [
      "1-hour photoshoot session",
      "Up to 50 edited photos",
      "Online gallery access",
      "Personal usage rights",
      "5 high-resolution downloads",
      "Basic retouching included",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    description: "Ideal for events and special occasions",
    icon: Award,
    features: [
      "3-hour photoshoot session",
      "Up to 150 edited photos",
      "Online gallery with sharing",
      "Commercial usage rights",
      "30 high-resolution downloads",
      "Advanced retouching included",
      "Same-day preview available",
      "Printed photo album (8x10)",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$999",
    description: "Complete coverage for corporate events",
    icon: Users,
    features: [
      "Full-day photoshoot coverage",
      "Unlimited edited photos",
      "Premium online gallery",
      "Full commercial rights",
      "Unlimited high-resolution downloads",
      "Professional retouching suite",
      "24-hour turnaround time",
      "Premium printed album (12x16)",
      "Video highlights included",
      "Second photographer available",
    ],
    popular: false,
  },
];
