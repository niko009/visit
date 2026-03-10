'use client';

import React from 'react';
import { ServiceCard } from './ServiceCard';

export interface Service {
  id: string;
  data: {
    name: string;
    description: string;
    price: number;
    duration: number;
    image: string;
    order?: number;
    isActive: boolean;
  };
}

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Услуги и цены
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Идеальные брови и губы
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Подберём технику, форму и оттенок, которые подчеркнут вашу индивидуальность и будут радовать вас каждый день
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.filter(s => s.data.isActive).map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.data.name}
              description={service.data.description}
              image={service.data.image}
              items={[
                { name: service.data.name, price: service.data.price },
              ]}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Не уверены, какая процедура подойдёт? Запишитесь на бесплатную консультацию
          </p>
        </div>
      </div>
    </section>
  );
}
