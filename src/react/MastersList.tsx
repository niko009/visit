'use client';

import React from 'react';
import { MasterCard } from './MasterCard';

export interface Master {
  id: string;
  data: {
    name: string;
    position: string;
    experience: number;
    bio: string;
    photo: string;
    instagram?: string;
    telegram?: string;
    order?: number;
    isActive: boolean;
  };
}

interface MastersListProps {
  masters: Master[];
}

export function MastersList({ masters }: MastersListProps) {
  return (
    <section id="masters" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Наша команда
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Сертифицированные мастера
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Специалисты с многолетним опытом и постоянно повышаемой квалификацией. Каждый мастер работает в своей специализации.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {masters.filter(m => m.data.isActive).map((master, index) => (
            <MasterCard
              key={master.id}
              name={master.data.name}
              position={master.data.position}
              experience={master.data.experience}
              bio={master.data.bio}
              photo={master.data.photo}
              instagram={master.data.instagram}
              telegram={master.data.telegram}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
