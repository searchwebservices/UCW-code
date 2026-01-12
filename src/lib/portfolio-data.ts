export interface PortfolioImage {
  src: string;
  alt: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface PortfolioWedding {
  slug: string;
  title: string;
  description: string;
  flowerDesign: string;
  photography: string;
  planner: string;
  heroImage: PortfolioImage;
  gallery: PortfolioImage[];
}

export const portfolioWeddings: PortfolioWedding[] = [
  {
    slug: "mara-david",
    title: "Mara & David",
    description: "A sun-kissed Cabo celebration filled with joyful color, modern silhouettes, and effortless warmth. Every moment feels vibrant and alive, wrapped in ocean light and genuine, easy love.",
    flowerDesign: "Bloom Studio",
    photography: "Costa Photo",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x1600/e8e0d5/666666?text=Mara+%26+David",
      alt: "Mara & David hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "ayana-austin",
    title: "Ayana & Austin",
    description: "A colorful Cabo celebration filled with ocean breeze, bright florals, and a love that feels joyful and effortless. Every moment glows with heartfelt warmth, laughter, and the magic of saying yes by the sea.",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x1600/e8e0d5/666666?text=Ayana+%26+Austin",
      alt: "Ayana & Austin hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "shivani-brendin",
    title: "Shivani & Brendin",
    description: "A joyful Cabo celebration blending vibrant South Asian traditions with ocean-side warmth. Bold colors, heartfelt rituals, and effortless happiness fill every moment, creating a weekend that feels alive, emotional, and beautifully unforgettable.",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x1600/e8e0d5/666666?text=Shivani+%26+Brendin",
      alt: "Shivani & Brendin hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "nicole-chris",
    title: "Nicole & Chris",
    description: "An elegant and timeless celebration at a luxury villa, featuring classic white florals and breathtaking ocean views.",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/DPzjHUtN2iWi99rFnuOGmsKrsc-5.jpg",
      alt: "Nicole & Chris hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "victoria-patrick",
    title: "Victoria & Patrick",
    description: "A romantic beachside wedding with soft pastels and intimate moments under the Cabo sunset.",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WIxbm0grdCLOY88xi3jUEIAewu0-6.jpg",
      alt: "Victoria & Patrick hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "megan-michael",
    title: "Megan & Michael",
    description: "A modern and chic celebration featuring bold design elements and a high-energy reception.",
    flowerDesign: "Velvet Floral",
    photography: "MC Weddings",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/RtceKEvqPWyliWrLVtQeBtBCrA-7.jpg",
      alt: "Megan & Michael hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
    ],
  },
];

export function getWeddingBySlug(slug: string): PortfolioWedding | undefined {
  return portfolioWeddings.find((wedding) => wedding.slug === slug);
}

export function getAdjacentWeddings(slug: string): {
  prev: PortfolioWedding | null;
  next: PortfolioWedding | null;
} {
  const currentIndex = portfolioWeddings.findIndex((w) => w.slug === slug);
  return {
    prev: currentIndex > 0 ? portfolioWeddings[currentIndex - 1] : null,
    next: currentIndex < portfolioWeddings.length - 1 ? portfolioWeddings[currentIndex + 1] : null,
  };
}
