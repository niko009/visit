import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Интерьер студии перманентного макияжа Brow & Lip Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/80 mb-6">
            {'Студия перманентного макияжа'}
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl text-balance">
            {'Естественная красота надолго'}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {'Перманентный макияж бровей и губ от сертифицированных мастеров. Подчёркиваем вашу природную красоту с помощью авторских техник и премиальных пигментов.'}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
            >
              <a href="#booking">Записаться на консультацию</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 text-base"
            >
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
            Листайте
          </span>
          <div className="h-12 w-px bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
