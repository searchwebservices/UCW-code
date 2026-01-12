export interface PortfolioImage {
  src: string;
  alt: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface PortfolioWedding {
  slug: string;
  title: string;
  flowerDesign: string;
  photography: string;
  planner: string;
  heroImage: PortfolioImage;
  gallery: PortfolioImage[];
}

export const portfolioWeddings: PortfolioWedding[] = [
  {
    slug: "nicole-chris",
    title: "Nicole & Chris",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x600/e8e0d5/666666?text=Hero+Image",
      alt: "Nicole & Chris hero image",
      aspectRatio: "landscape",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+3", alt: "Gallery image 3", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+4", alt: "Gallery image 4", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x600/d5cec4/666666?text=Gallery+5", alt: "Gallery image 5", aspectRatio: "square" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+6", alt: "Gallery image 6", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+7", alt: "Gallery image 7", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+8", alt: "Gallery image 8", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+9", alt: "Gallery image 9", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+10", alt: "Gallery image 10", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+11", alt: "Gallery image 11", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+12", alt: "Gallery image 12", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "victoria-patrick",
    title: "Victoria & Patrick",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x600/e8e0d5/666666?text=Hero+Image",
      alt: "Victoria & Patrick hero image",
      aspectRatio: "landscape",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+3", alt: "Gallery image 3", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+4", alt: "Gallery image 4", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x600/d5cec4/666666?text=Gallery+5", alt: "Gallery image 5", aspectRatio: "square" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+6", alt: "Gallery image 6", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+7", alt: "Gallery image 7", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+8", alt: "Gallery image 8", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+9", alt: "Gallery image 9", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+10", alt: "Gallery image 10", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+11", alt: "Gallery image 11", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+12", alt: "Gallery image 12", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "megan-michael",
    title: "Megan & Michael",
    flowerDesign: "Velvet Floral",
    photography: "MC Weddings",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x600/e8e0d5/666666?text=Hero+Image",
      alt: "Megan & Michael hero image",
      aspectRatio: "landscape",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+3", alt: "Gallery image 3", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+4", alt: "Gallery image 4", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x600/d5cec4/666666?text=Gallery+5", alt: "Gallery image 5", aspectRatio: "square" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+6", alt: "Gallery image 6", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+7", alt: "Gallery image 7", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+8", alt: "Gallery image 8", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+9", alt: "Gallery image 9", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+10", alt: "Gallery image 10", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+11", alt: "Gallery image 11", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+12", alt: "Gallery image 12", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "mara-david",
    title: "Mara & David",
    flowerDesign: "Bloom Studio",
    photography: "Costa Photo",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://placehold.co/1200x600/e8e0d5/666666?text=Hero+Image",
      alt: "Mara & David hero image",
      aspectRatio: "landscape",
    },
    gallery: [
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+1", alt: "Gallery image 1", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+2", alt: "Gallery image 2", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+3", alt: "Gallery image 3", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+4", alt: "Gallery image 4", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x600/d5cec4/666666?text=Gallery+5", alt: "Gallery image 5", aspectRatio: "square" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+6", alt: "Gallery image 6", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+7", alt: "Gallery image 7", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+8", alt: "Gallery image 8", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+9", alt: "Gallery image 9", aspectRatio: "landscape" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+10", alt: "Gallery image 10", aspectRatio: "portrait" },
      { src: "https://placehold.co/400x500/e8e0d5/666666?text=Gallery+11", alt: "Gallery image 11", aspectRatio: "portrait" },
      { src: "https://placehold.co/600x500/d5cec4/666666?text=Gallery+12", alt: "Gallery image 12", aspectRatio: "landscape" },
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
