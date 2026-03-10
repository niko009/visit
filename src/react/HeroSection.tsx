'use client';

import React from 'react';
import { Button } from './ui/Button';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export function HeroSection({
  title,
  description,
  ctaText = 'Записаться на консультацию',
  ctaHref = '#booking',
  secondaryCTA,
  backgroundImage = '/images/hero.jpg',
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Интерьер студии"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-white/80 mb-6">
            Студия перманентного макияжа
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="primary" className="rounded-full px-8 text-base">
              <a href={ctaHref}>{ctaText}</a>
            </Button>
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 px-8 text-base">
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/60">Листайте</span>
          <div className="h-12 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
