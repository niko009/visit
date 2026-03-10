import { ServiceCard } from "@/components/service-card"

const services = [
  {
    title: "Микроблейдинг бровей",
    description: "Тонкие волосковые штрихи, имитирующие натуральные волоски. Идеально для создания естественных и густых бровей.",
    image: "/images/brows-microblading.jpg",
    badge: "Хит",
    items: [
      { name: "Микроблейдинг", price: "8 000 \u20BD" },
      { name: "Коррекция (до 2 мес.)", price: "3 000 \u20BD" },
      { name: "Перекрытие старого ПМ", price: "10 000 \u20BD" },
    ],
  },
  {
    title: "Пудровые брови",
    description: "Мягкая растушёвка с эффектом припудренных бровей. Натуральный объём без чётких границ.",
    image: "/images/brows-powder.jpg",
    badge: "Популярное",
    items: [
      { name: "Пудровые брови", price: "9 000 \u20BD" },
      { name: "Коррекция (до 2 мес.)", price: "3 500 \u20BD" },
      { name: "Комбо (волоски + пудра)", price: "11 000 \u20BD" },
    ],
  },
  {
    title: "Перманент губ",
    description: "Натуральная насыщенность и чёткий контур губ. Эффект свежего макияжа каждый день.",
    image: "/images/lips-tattoo.jpg",
    badge: "Новинка",
    items: [
      { name: "Акварельные губы", price: "9 500 \u20BD" },
      { name: "Помадный эффект", price: "10 000 \u20BD" },
      { name: "Коррекция (до 2 мес.)", price: "4 000 \u20BD" },
    ],
  },
  {
    title: "Контур губ",
    description: "Подчёркивает форму и визуально увеличивает объём без филлеров. Чёткий и аккуратный контур.",
    image: "/images/lips-contour.jpg",
    items: [
      { name: "Контур губ", price: "7 500 \u20BD" },
      { name: "Контур с растушёвкой", price: "9 000 \u20BD" },
      { name: "Коррекция (до 2 мес.)", price: "3 000 \u20BD" },
    ],
  },
  {
    title: "Коррекция и обновление",
    description: "Освежение цвета и формы существующего перманентного макияжа для идеального результата.",
    image: "/images/correction.jpg",
    items: [
      { name: "Рефреш бровей", price: "6 000 \u20BD" },
      { name: "Рефреш губ", price: "7 000 \u20BD" },
      { name: "Удаление ремувером", price: "5 000 \u20BD" },
    ],
  },
  {
    title: "Консультация",
    description: "Подбор формы, цвета и техники с учётом ваших особенностей. Построение эскиза перед процедурой.",
    image: "/images/consultation.jpg",
    badge: "Бесплатно",
    items: [
      { name: "Консультация онлайн", price: "0 \u20BD" },
      { name: "Консультация в студии", price: "0 \u20BD" },
      { name: "Тест на пигмент", price: "1 000 \u20BD" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Услуги и цены
          </span>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Идеальные брови и губы
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {'Подберём технику, форму и оттенок, которые подчеркнут вашу индивидуальность и будут радовать вас каждый день'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {'Не уверены, какая процедура подойдёт? Запишитесь на бесплатную консультацию'}
          </p>
        </div>
      </div>
    </section>
  )
}
