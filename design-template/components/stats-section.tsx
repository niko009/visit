const stats = [
  { value: "10+", label: "лет опыта" },
  { value: "8 000+", label: "довольных клиентов" },
  { value: "4", label: "мастера в команде" },
  { value: "99%", label: "рекомендуют нас" },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
