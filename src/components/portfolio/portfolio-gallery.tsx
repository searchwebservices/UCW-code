"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { PortfolioWedding } from "@/lib/portfolio-data";

interface PortfolioGalleryProps {
  wedding: PortfolioWedding;
}

export default function PortfolioGallery({ wedding }: PortfolioGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="relative w-full aspect-[16/8] mb-4 overflow-hidden group">
        <Image
          src={wedding.heroImage.src}
          alt={wedding.heroImage.alt}
          fill
          className="object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          onClick={() => openLightbox(0)}
          priority
        />
        <button
          onClick={() => openLightbox(0)}
          className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {wedding.gallery[0] && (
          <div className="col-span-4">
            <GalleryImage 
              image={wedding.gallery[0]} 
              onClick={() => openLightbox(1)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}
        {wedding.gallery[1] && (
          <div className="col-span-5">
            <GalleryImage 
              image={wedding.gallery[1]} 
              onClick={() => openLightbox(2)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}
        {wedding.gallery[2] && (
          <div className="col-span-3">
            <GalleryImage 
              image={wedding.gallery[2]} 
              onClick={() => openLightbox(3)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}

        {wedding.gallery[3] && (
          <div className="col-span-6">
            <GalleryImage 
              image={wedding.gallery[3]} 
              onClick={() => openLightbox(4)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}
        {wedding.gallery[4] && (
          <div className="col-span-6">
            <GalleryImage 
              image={wedding.gallery[4]} 
              onClick={() => openLightbox(5)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}

        {wedding.gallery[5] && (
          <div className="col-span-4">
            <GalleryImage 
              image={wedding.gallery[5]} 
              onClick={() => openLightbox(6)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}
        {wedding.gallery[6] && (
          <div className="col-span-4">
            <GalleryImage 
              image={wedding.gallery[6]} 
              onClick={() => openLightbox(7)} 
              aspectClass="aspect-[5/6]"
            />
          </div>
        )}
        {wedding.gallery[7] && (
          <div className="col-span-4">
            <GalleryImage 
              image={wedding.gallery[7]} 
              onClick={() => openLightbox(8)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}

        {wedding.gallery[8] && (
          <div className="col-span-5">
            <GalleryImage 
              image={wedding.gallery[8]} 
              onClick={() => openLightbox(9)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}
        {wedding.gallery[9] && (
          <div className="col-span-7">
            <GalleryImage 
              image={wedding.gallery[9]} 
              onClick={() => openLightbox(10)} 
              aspectClass="aspect-[4/5]"
            />
          </div>
        )}

        {wedding.gallery.length > 10 && (
          <>
            {wedding.gallery[10] && (
              <div className="col-span-4">
                <GalleryImage 
                  image={wedding.gallery[10]} 
                  onClick={() => openLightbox(11)} 
                  aspectClass="aspect-[4/5]"
                />
              </div>
            )}
            {wedding.gallery[11] && (
              <div className="col-span-8">
                <GalleryImage 
                  image={wedding.gallery[11]} 
                  onClick={() => openLightbox(12)} 
                  aspectClass="aspect-[16/10]"
                />
              </div>
            )}
          </>
        )}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] mx-4">
            <Image
              src={lightboxIndex === 0 ? wedding.heroImage.src : wedding.gallery[lightboxIndex - 1]?.src || wedding.heroImage.src}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {wedding.gallery.length + 1}
          </div>
        </div>
      )}
    </>
  );
}

function GalleryImage({ 
  image, 
  onClick, 
  aspectClass 
}: { 
  image: { src: string; alt: string }; 
  onClick: () => void;
  aspectClass: string;
}) {
  return (
    <div 
      className={`relative ${aspectClass} overflow-hidden group cursor-pointer`}
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
