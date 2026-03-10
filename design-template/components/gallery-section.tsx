"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Микроблейдинг бровей \u2014 естественный результат" },
  { src: "/images/gallery-2.jpg", alt: "Перманент губ \u2014 натуральный розовый оттенок" },
  { src: "/images/gallery-3.jpg", alt: "Пудровые брови \u2014 мягкая растушёвка" },
  { src: "/images/gallery-4.jpg", alt: "Помадный эффект на губах" },
  { src: "/images/gallery-5.jpg", alt: "Комбинированная техника бровей" },
  { src: "/images/gallery-6.jpg", alt: "Контур губ с нежной растушёвкой" },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Наши работы
          </span>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Портфолио мастеров
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {'Каждая работа \u2014 это результат точного подбора формы, цвета и техники под индивидуальные черты лица'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-square"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className={`absolute inset-0 flex items-end bg-foreground/0 transition-colors duration-500 ${
                  hoveredIndex === index ? "bg-foreground/30" : ""
                }`}
              >
                <p
                  className={`p-4 text-sm font-medium text-primary-foreground transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
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
  )
}
