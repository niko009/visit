# Инструкция: Встраивание Facebook, Instagram и TikTok в Astro/Tailwind проект

## 1. Варианты интеграции

### A. Простое встраивание (Embed)
- Используется официальный embed-код (iframe или JS SDK).
- Не требует регистрации приложения или API-ключей.
- Подходит для отображения отдельных постов, видео, рилсов, профилей.

### B. Динамический feed (API)
- Требует регистрацию приложения, получение токенов.
- Позволяет автоматически подгружать контент (например, последние посты).
- Для Astro рекомендуется использовать серверные API-роуты.

---

## 2. Facebook

### Встраивание поста/видео
1. Перейдите на нужный пост/видео в Facebook.
2. Нажмите "..." → "Встроить" (Embed).
3. Скопируйте HTML-код iframe.
4. Вставьте его в Astro или React компонент:

```astro
---
// ...existing code...
---
<div class="my-8">
  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage%2Fposts%2F1234567890&show_text=true" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
</div>
```

### Встраивание страницы
- Используйте [Page Plugin](https://developers.facebook.com/docs/plugins/page-plugin/):

```astro
<div class="my-8">
  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage&tabs=timeline&width=500&height=600" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
</div>
```

---

## 3. Instagram

### Встраивание поста/рила
1. Откройте нужный пост/рилс в Instagram.
2. Нажмите "..." → "Embed".
3. Скопируйте HTML-код.
4. Вставьте в Astro/React компонент:

```astro
<div class="my-8">
  <iframe src="https://www.instagram.com/p/POST_ID/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
</div>
```

### Встраивание профиля
- Официального embed для профиля нет, но можно использовать сторонние сервисы (например, [LightWidget](https://lightwidget.com/)).

---

## 4. TikTok

### Встраивание видео
1. Откройте нужное видео в TikTok.
2. Нажмите "Поделиться" → "Встроить" (Embed).
3. Скопируйте HTML-код.
4. Вставьте в Astro/React компонент:

```astro
<div class="my-8">
  <iframe src="https://www.tiktok.com/embed/VIDEO_ID" width="325" height="575" frameborder="0" allowfullscreen></iframe>
</div>
```

---

## 5. Tailwind оформление
- Для адаптивности используйте классы:
  - `w-full max-w-md mx-auto rounded-lg shadow-lg`
  - `my-8` для отступов
- Пример:

```astro
<div class="w-full max-w-md mx-auto my-8 rounded-lg shadow-lg">
  <iframe ... />
</div>
```

---

## 6. Динамический feed (через API)
- Для автоматического обновления контента потребуется:
  - Зарегистрировать приложение (Facebook/Instagram/TikTok)
  - Получить API-ключи и токены
  - Реализовать серверный API-роут (например, `src/pages/api/social-feed.ts`)
  - На клиенте запрашивать данные через fetch
- Подробнее: см. официальные [Facebook Graph API](https://developers.facebook.com/docs/graph-api/), [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/), [TikTok API](https://developers.tiktok.com/doc/login-kit-api/)

---

## 7. Безопасность и ограничения
- Не размещайте приватные токены в клиентском коде.
- Встраивание через iframe не требует токенов.
- Некоторые embed могут быть недоступны для приватных профилей.

---

## 8. Пример секции для сайта

```astro
<section class="bg-muted py-12">
  <div class="container mx-auto grid gap-8 md:grid-cols-3">
    <div>
      <h3 class="mb-4 text-lg font-bold">Instagram</h3>
      <iframe src="https://www.instagram.com/p/POST_ID/embed" class="w-full h-96 rounded-lg shadow" frameborder="0"></iframe>
    </div>
    <div>
      <h3 class="mb-4 text-lg font-bold">Facebook</h3>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage&tabs=timeline" class="w-full h-96 rounded-lg shadow" frameborder="0"></iframe>
    </div>
    <div>
      <h3 class="mb-4 text-lg font-bold">TikTok</h3>
      <iframe src="https://www.tiktok.com/embed/VIDEO_ID" class="w-full h-96 rounded-lg shadow" frameborder="0"></iframe>
    </div>
  </div>
</section>
```

---

## 9. Полезные ссылки
- [Facebook Plugins](https://developers.facebook.com/docs/plugins/)
- [Instagram Embedding](https://help.instagram.com/1186878215913205)
- [TikTok Embed](https://developers.tiktok.com/doc/embed/)
- [LightWidget Instagram Feed](https://lightwidget.com/)

---

**Готово!** Можно вставлять embed-коды в любой Astro/React компонент и оформить их Tailwind-классами для адаптивности.
