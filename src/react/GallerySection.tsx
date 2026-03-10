'use client';

import React from 'react';

interface GallerySectionProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export function GallerySection({ images }: GallerySectionProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Наши работы
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Портфолио мастеров
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Каждая работа — это результат точного подбора формы, цвета и техники под индивидуальные черты лица
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${
                index === 0 || index === 5 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`h-full w-full object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 flex items-end bg-black/0 transition-colors duration-500 ${
                  hoveredIndex === index ? 'bg-black/30' : ''
                }`}
              >
                <p
                  className={`p-4 text-sm font-medium text-white transition-all duration-500 ${
                    hoveredIndex === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
