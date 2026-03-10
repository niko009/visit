"use client"

import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ServiceItem {
  name: string
  price: string
}

interface ServiceCardProps {
  title: string
  description: string
  image: string
  items: ServiceItem[]
  badge?: string
  index: number
}

export function ServiceCard({ title, description, image, items, badge, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:bg-foreground/20" />
        {badge && (
          <Badge className="absolute top-4 right-4 border-none bg-primary text-primary-foreground px-3 py-1 text-xs tracking-wide uppercase">
            {badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-card-foreground tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between border-b border-border/60 pb-2 last:border-b-0 last:pb-0"
            >
              <span className="text-sm text-card-foreground">{item.name}</span>
              <span className="text-sm font-semibold text-primary">{item.price}</span>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-2 w-full rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          Записаться
        </Button>
      </div>
    </article>
  )
}
