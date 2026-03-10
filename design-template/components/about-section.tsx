import Image from "next/image"

const features = [
  {
    title: "Сертифицированные мастера",
    description: "Наши специалисты прошли обучение у лучших тренеров индустрии и регулярно повышают квалификацию.",
  },
  {
    title: "Премиальные пигменты",
    description: "Работаем только с органическими пигментами ведущих мировых брендов, которые не меняют цвет со временем.",
  },
  {
    title: "Полная стерильность",
    description: "Одноразовые расходники, автоклав и строгое соблюдение санитарных норм для вашей безопасности.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/about.jpg"
              alt="Мастер выполняет процедуру перманентного макияжа"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
              О нашей студии
            </span>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              {'Красота, которой вы доверяете'}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {'Brow & Lip Studio \u2014 это пространство, созданное для тех, кто хочет подчеркнуть свою природную красоту. Мы специализируемся на перманентном макияже бровей и губ, используя современные техники, которые дарят максимально естественный результат.'}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {'Каждая процедура начинается с детальной консультации и построения индивидуальной формы, чтобы результат идеально подходил именно вам.'}
            </p>

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
  )
}
