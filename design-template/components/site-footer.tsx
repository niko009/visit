export function SiteFooter() {
  return (
    <footer id="contacts" className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M12 19c-4 0-7-2-7-5s3-5 7-5 7 2 7 5-3 5-7 5z" />
                  <path d="M5 14c-1.5-1-2-3-1-5 1.5-3 5.5-5 9-4" />
                  <path d="M19 14c1.5-1 2-3 1-5-1.5-3-5.5-5-9-4" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Brow & Lip Studio
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'Студия перманентного макияжа бровей и губ. Подчёркиваем вашу природную красоту.'}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Услуги
            </h3>
            <ul className="flex flex-col gap-3">
              {["Микроблейдинг бровей", "Пудровые брови", "Перманент губ", "Контур губ", "Коррекция", "Консультация"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Время работы
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>{'\u041F\u043D \u2014 \u041F\u0442'}</span>
                <span className="text-foreground">{'10:00 \u2014 20:00'}</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span className="text-foreground">{'10:00 \u2014 18:00'}</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span className="text-foreground">по записи</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Контакты
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{'ул. Цветочная, 42, Москва'}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+79991234567" className="transition-colors hover:text-foreground">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:hello@browlipstudio.ru"
                  className="transition-colors hover:text-foreground"
                >
                  hello@browlipstudio.ru
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: "Telegram",
                  path: "M21.198 2.433a2.242 2.242 0 00-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 01-2.849 1.09c-.42.147-.99.332-1.473.901-.728.855.075 1.644.357 1.882.397.335.855.53 1.17.667l.038.018 3.035 1.005c.24.665 1.57 4.335 1.89 5.23.185.516.378.85.643 1.11.132.131.288.238.472.315l.013.006.014.005a1.352 1.352 0 00.49.063c.373 0 .667-.138.89-.268l2.434-1.682 2.855 2.202.154.12c.328.247.675.396 1.038.396a1.522 1.522 0 001.098-.49c.253-.272.395-.594.476-.897.082-.302.138-.61.186-.873l.012-.065 1.86-9.97 1.072-5.698c.056-.276.1-.561.074-.863a1.547 1.547 0 00-.415-.959 1.503 1.503 0 00-1.085-.455zM8 12l9-7-7 8-2 5V12z",
                },
                {
                  label: "Instagram",
                  path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {'Brow & Lip Studio \u00A9 2026. Все права защищены.'}
          </p>
          <p className="text-xs text-muted-foreground">
            {'Политика конфиденциальности'}
          </p>
        </div>
      </div>
    </footer>
  )
}
