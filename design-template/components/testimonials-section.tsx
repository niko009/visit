const testimonials = [
  {
    name: "Анна К.",
    text: "Делала пудровые брови у Елены \u2014 результат просто невероятный! Выглядят абсолютно натурально, как будто так и было. Уже полгода просыпаюсь с идеальными бровями.",
    rating: 5,
    service: "Пудровые брови",
  },
  {
    name: "Мария С.",
    text: "Долго не решалась на перманент губ, но мастер всё подробно объяснила на консультации. Результат превзошёл ожидания \u2014 губы выглядят свежо и естественно, как после лёгкого блеска.",
    rating: 5,
    service: "Акварельные губы",
  },
  {
    name: "Елена Д.",
    text: "Ходила на микроблейдинг после неудачного опыта в другом месте. Мастер аккуратно перекрыла старую работу. Теперь у меня идеальные брови, и я больше не трачу время на утренний макияж!",
    rating: 5,
    service: "Микроблейдинг бровей",
  },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Отзывы клиентов
          </span>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Нам доверяют
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <StarIcon key={i} className="text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-base leading-relaxed text-card-foreground">
                {`\u201C${item.text}\u201D`}
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
