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
    slug: "nicole-chris",
    title: "Nicole & Chris",
    description: "An elegant and timeless celebration at a luxury villa, featuring classic white florals and breathtaking ocean views.",
    flowerDesign: "Masarro",
    photography: "Frank Testitesco",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://i.imgur.com/rywyuYx.jpeg",
      alt: "Nicole & Chris hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/mpm4SKi.jpeg", alt: "Nicole & Chris gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/4aIs2s4.jpeg", alt: "Nicole & Chris gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/olwrY1z.jpeg", alt: "Nicole & Chris gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/wpZWiRq.jpeg", alt: "Nicole & Chris gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/eGihBLj.jpeg", alt: "Nicole & Chris gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/wFoH2Vu.jpeg", alt: "Nicole & Chris gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/AX6tezW.jpeg", alt: "Nicole & Chris gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/VL9sRC4.jpeg", alt: "Nicole & Chris gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/KdN7nbT.jpeg", alt: "Nicole & Chris gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/CvMDcTq.jpeg", alt: "Nicole & Chris gallery 10", aspectRatio: "landscape" },
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
      src: "https://i.imgur.com/UWY8o3W.jpeg",
      alt: "Victoria & Patrick hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/tBUf2og.jpeg", alt: "Victoria & Patrick gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/tMuBG9x.jpeg", alt: "Victoria & Patrick gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/twWwmsc.jpeg", alt: "Victoria & Patrick gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/j2aYEtv.jpeg", alt: "Victoria & Patrick gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/lYRyDLS.jpeg", alt: "Victoria & Patrick gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/MfoObff.jpeg", alt: "Victoria & Patrick gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/fEPDwEu.jpeg", alt: "Victoria & Patrick gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/iOsHhZx.jpeg", alt: "Victoria & Patrick gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/BEmInod.jpeg", alt: "Victoria & Patrick gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/HNb817l.jpeg", alt: "Victoria & Patrick gallery 10", aspectRatio: "landscape" },
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
      src: "https://i.imgur.com/nNPZlQy.jpeg",
      alt: "Megan & Michael hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/ggMa7kE.jpeg", alt: "Megan & Michael gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/WvVnkFP.jpeg", alt: "Megan & Michael gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/J8fBFSM.jpeg", alt: "Megan & Michael gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/0fRJuVA.jpeg", alt: "Megan & Michael gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/Dv9CmfB.jpeg", alt: "Megan & Michael gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/4XUFQYP.jpeg", alt: "Megan & Michael gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/ALzvsgZ.jpeg", alt: "Megan & Michael gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/16ViYPm.jpeg", alt: "Megan & Michael gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/OsHtUuJ.jpeg", alt: "Megan & Michael gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/63ikDjc.jpeg", alt: "Megan & Michael gallery 10", aspectRatio: "landscape" },
    ],
  },
  {
    slug: "mara-david",
    title: "Mara & David",
    description: "A sun-kissed Cabo celebration filled with joyful color, modern silhouettes, and effortless warmth. Every moment feels vibrant and alive, wrapped in ocean light and genuine, easy love.",
    flowerDesign: "Bloom Studio",
    photography: "Costa Photo",
    planner: "Unique Cabo Weddings",
    heroImage: {
      src: "https://i.imgur.com/9IbIGHc.jpeg",
      alt: "Mara & David hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/4bNcOm1.jpeg", alt: "Mara & David gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/FmJKb49.jpeg", alt: "Mara & David gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/gmv09DP.jpeg", alt: "Mara & David gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/kxhFnsX.jpeg", alt: "Mara & David gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/lu6sgrp.jpeg", alt: "Mara & David gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/oQxaobW.jpeg", alt: "Mara & David gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/Qo0yDuv.jpeg", alt: "Mara & David gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/BksZqyJ.jpeg", alt: "Mara & David gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/D8Pl0Go.jpeg", alt: "Mara & David gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/hY0nVKP.jpeg", alt: "Mara & David gallery 10", aspectRatio: "landscape" },
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
      src: "https://i.imgur.com/JlH5bzw.jpeg",
      alt: "Ayana & Austin hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/B8yjJdV.jpeg", alt: "Ayana & Austin gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/WlOW0hT.jpeg", alt: "Ayana & Austin gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/cSyth2s.jpeg", alt: "Ayana & Austin gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/uAQWeAs.jpeg", alt: "Ayana & Austin gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/2gj3v3K.jpeg", alt: "Ayana & Austin gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/LR7zXsI.jpeg", alt: "Ayana & Austin gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/4FYi6Ta.jpeg", alt: "Ayana & Austin gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/uDQ8hjd.jpeg", alt: "Ayana & Austin gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/1ri4lX6.jpeg", alt: "Ayana & Austin gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/2FgSC6x.jpeg", alt: "Ayana & Austin gallery 10", aspectRatio: "landscape" },
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
      src: "https://i.imgur.com/Zi5zvMA.jpeg",
      alt: "Shivani & Brendin hero image",
      aspectRatio: "portrait",
    },
    gallery: [
      { src: "https://i.imgur.com/AfNepzs.jpeg", alt: "Shivani & Brendin gallery 1", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/7q4Pd2A.jpeg", alt: "Shivani & Brendin gallery 2", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/l6EI5gj.jpeg", alt: "Shivani & Brendin gallery 3", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/0sjLU07.jpeg", alt: "Shivani & Brendin gallery 4", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/CRWKDE8.jpeg", alt: "Shivani & Brendin gallery 5", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/VWxEQr1.jpeg", alt: "Shivani & Brendin gallery 6", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/oV2NjJy.jpeg", alt: "Shivani & Brendin gallery 7", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/VpwFfYL.jpeg", alt: "Shivani & Brendin gallery 8", aspectRatio: "landscape" },
      { src: "https://i.imgur.com/GjlHPZv.jpeg", alt: "Shivani & Brendin gallery 9", aspectRatio: "portrait" },
      { src: "https://i.imgur.com/HjD8boe.jpeg", alt: "Shivani & Brendin gallery 10", aspectRatio: "landscape" },
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
