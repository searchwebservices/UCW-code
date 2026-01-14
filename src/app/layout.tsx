import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const siteUrl = "https://uniquecaboweddings.com";
const siteName = "Unique Cabo Weddings";
const siteDescription = "Plan your dream Cabo destination wedding with 20+ years of local expertise. Unique Cabo Weddings by Luba offers personalized planning for discerning couples seeking hidden gems, 350 days of sun, and stress-free celebrations in Los Cabos. From intimate villas to oceanfront venues—your vision, expertly executed.";
const ogImage = "/ucw-preview.png";
const faviconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WNtvMo5tp5fgOGST3T3zn7s0R1c-1.png";

export const metadata: Metadata = {
  // Core Meta Tags
  title: {
    default: "Unique Cabo Weddings | Premier Destination Wedding Planner in Los Cabos",
    template: "%s | Unique Cabo Weddings",
  },
  description: siteDescription,
  keywords: [
    "Cabo destination wedding planner",
    "Los Cabos wedding coordinator",
    "Cabo San Lucas wedding planning",
    "Mexico destination wedding expert",
    "Cabo wedding planner",
    "destination wedding Mexico",
    "luxury Cabo wedding",
    "beach wedding Cabo",
    "Cabo wedding packages",
    "destination wedding planning",
    "Luba Cabo planner",
    "Unique Cabo Weddings",
  ],
  authors: [{ name: "Unique Cabo Weddings", url: siteUrl }],
  creator: "Unique Cabo Weddings",
  publisher: "Unique Cabo Weddings",
  
  // Favicon and Icons
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  
  // Open Graph (Facebook, Instagram, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Unique Cabo Weddings | 20+ Years of Destination Wedding Excellence",
    description: "Your dream Cabo wedding, stress-free. With 20+ years of local expertise, Luba and her team create unforgettable celebrations in Los Cabos. 350 days of sun, hidden gem venues, and personalized planning for couples who deserve more than a cookie-cutter wedding.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Unique Cabo Weddings - Destination Wedding Planning in Los Cabos",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Unique Cabo Weddings | Premier Cabo Destination Wedding Planner",
    description: "Plan your dream destination wedding in Los Cabos with 20+ years of expertise. 350 days of sun, exclusive venues, and stress-free planning by Luba.",
    images: [ogImage],
    creator: "@uniquecaboweddings",
  },
  
  // Technical SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add your verification codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
  
  // Alternate languages (if applicable)
  alternates: {
    canonical: siteUrl,
  },
  
  // Category
  category: "Wedding Planning",
  
  // Other
  metadataBase: new URL(siteUrl),
};

// JSON-LD Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Unique Cabo Weddings",
  alternateName: "UCW",
  description: "Premier destination wedding planning in Los Cabos with 20+ years of expertise. Personalized, stress-free wedding planning for discerning couples.",
  url: siteUrl,
  logo: faviconUrl,
  image: ogImage,
  telephone: "+52-624-122-0146",
  email: "luba@uniquecaboweddings.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Tezal",
    addressLocality: "Cabo San Lucas",
    addressRegion: "Baja California Sur",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.8905,
    longitude: -109.9167,
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Los Cabos",
    },
    {
      "@type": "Place", 
      name: "Cabo San Lucas",
    },
    {
      "@type": "Place",
      name: "San Jose del Cabo",
    },
  ],
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/uniquecaboweddings/",
    "https://www.weddingwire.com/biz/unique-cabo-weddings/a93ce236a1751046.html",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Wedding Planning",
          description: "Comprehensive destination wedding planning from start to finish",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Partial Planning",
          description: "Collaborative wedding planning support for couples who want guidance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Month-of Coordination",
          description: "Expert coordination to ensure your wedding day runs flawlessly",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Concierge Services",
          description: "Guest experience and activity planning for destination weddings",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
