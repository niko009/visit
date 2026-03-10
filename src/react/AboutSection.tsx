'use client';

import React from 'react';

const features = [
  {
    title: 'Сертифицированные мастера',
    description:
      'Наши специалисты прошли обучение у лучших тренеров индустрии и регулярно повышают квалификацию.',
  },
  {
    title: 'Премиальные пигменты',
    description:
      'Работаем только с органическими пигментами ведущих мировых брендов, которые не меняют цвет со временем.',
  },
  {
    title: 'Полная стерильность',
    description:
      'Одноразовые расходники, автоклав и строгое соблюдение санитарных норм для вашей безопасности.',
  },
];

interface AboutSectionProps {
  image: string;
  title: string;
  description: string[];
}

export function AboutSection({ image, title, description }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
            <img
              src={image}
              alt="О нашей студии"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
              О нашей студии
            </span>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {title}
            </h2>
            <div className="mt-6 space-y-4">
              {description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-muted-foreground lg:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
