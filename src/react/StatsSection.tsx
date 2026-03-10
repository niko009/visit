'use client';

import React from 'react';

interface StatsItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatsItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-4xl sm:text-5xl font-bold font-serif">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
