import { Button } from "@/components/ui/button"

export function BookingSection() {
  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-6">
          Запись на процедуру
        </span>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
          {'Готовы к идеальным бровям?'}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          {'Запишитесь на бесплатную консультацию, где мы подберём форму, оттенок и технику специально для вас. Первый шаг к красоте без усилий.'}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 text-base font-medium sm:w-auto"
          >
            Записаться онлайн
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-10 text-base sm:w-auto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +7 (999) 123-45-67
          </Button>
        </div>
      </div>
    </section>
  )
}
