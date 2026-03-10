'use client';

import React, { useState } from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface ServiceItem {
  name: string;
  price: number;
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  items: ServiceItem[];
  badge?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  image,
  items,
  badge,
  index = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20" />
        {badge && (
          <Badge variant="default" className="absolute top-4 right-4">
            {badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-card-foreground tracking-tight">
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
              className="flex items-center justify-between border-b border-border pb-2 last:border-b-0 last:pb-0"
            >
              <span className="text-sm text-card-foreground">{item.name}</span>
              <span className="text-sm font-bold text-primary">
                {formatPrice(item.price)}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-4 w-full rounded-xl border-primary/30 text-primary hover:bg-primary/10"
        >
          Записаться
        </Button>
      </div>
    </article>
  );
}
