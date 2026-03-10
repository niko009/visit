import { defineConfig } from 'tinacms';

// Конфигурация TinaCMS
// Все коллекции синхронизированы с src/content/config.ts

export default defineConfig({
  // Git-based хранилище
  branch: 'main', // основная ветка
  clientId: process.env.TINA_CLIENT_ID, // GitHub OAuth Client ID (опционально)
  token: process.env.TINA_TOKEN, // GitHub Token (опционально)
  
  // Конфигурация сборки
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  // Конфигурация CMSMedia
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  // Схемы коллекций контента
  schema: {
    collections: [
      /**
       * Коллекция "Services" (Услуги)
       * Синхронизирована с src/content/services/
       */
      {
        label: 'Услуги',
        name: 'services',
        path: 'src/content/services',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Название услуги',
            name: 'name',
            description: 'Например: Перманентный макияж бровей',
            required: true,
            ui: {
              validate: (value: any) => {
                if (!value || value.length < 3) {
                  return 'Название должно содержать минимум 3 символа';
                }
                if (value.length > 100) {
                  return 'Название слишком длинное (максимум 100 символов)';
                }
              },
            },
          },
          {
            type: 'number',
            label: 'Цена (₽)',
            name: 'price',
            description: 'Цена услуги в рублях',
            required: true,
          },
          {
            type: 'number',
            label: 'Длительность (мин)',
            name: 'duration',
            description: 'Сколько минут длится процедура',
            required: true,
          },
          {
            type: 'string',
            label: 'Описание',
            name: 'description',
            description: 'Подробное описание услуги',
            required: true,
            ui: {
              component: 'textarea',
              validate: (value: any) => {
                if (!value || value.length < 20) {
                  return 'Описание должно быть минимум 20 символов';
                }
                if (value.length > 1000) {
                  return 'Описание слишком длинное (максимум 1000 символов)';
                }
              },
            },
          },
          {
            type: 'image',
            label: 'Изображение услуги',
            name: 'image',
            description: 'JPG или PNG, минимум 400x300px',
            required: true,
          },
          {
            type: 'number',
            label: 'Порядок отображения',
            name: 'order',
            description: 'Услуги сортируются по этому значению (по возрастанию)',
          },
          {
            type: 'boolean',
            label: 'Активна',
            name: 'isActive',
            description: 'Показывать ли эту услугу на сайте',
          },
        ],
      },

      /**
       * Коллекция "Masters" (Мастера)
       * Синхронизирована с src/content/masters/
       */
      {
        label: 'Мастера',
        name: 'masters',
        path: 'src/content/masters',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Полное имя',
            name: 'name',
            required: true,
            ui: {
              validate: (value: any) => {
                if (!value || value.length < 2) {
                  return 'Имя слишком короткое';
                }
                if (value.length > 100) {
                  return 'Имя слишком длинное';
                }
              },
            },
          },
          {
            type: 'string',
            label: 'Должность',
            name: 'position',
            description: 'Например: Мастер перманентного макияжа',
            required: true,
            ui: {
              validate: (value: any) => {
                if (!value || value.length < 3) {
                  return 'Должность должна быть указана';
                }
                if (value.length > 150) {
                  return 'Должность слишком длинная';
                }
              },
            },
          },
          {
            type: 'number',
            label: 'Опыт (лет)',
            name: 'experience',
            description: 'Количество лет работы',
            required: true,
          },
          {
            type: 'string',
            label: 'Биография',
            name: 'bio',
            description: 'Полное описание мастера, достижения, сертификаты',
            required: true,
            ui: {
              component: 'textarea',
              validate: (value: any) => {
                if (!value || value.length < 50) {
                  return 'Биография должна быть подробной (минимум 50 символов)';
                }
                if (value.length > 2000) {
                  return 'Биография слишком длинная (максимум 2000 символов)';
                }
              },
            },
          },
          {
            type: 'image',
            label: 'Фотография',
            name: 'photo',
            description: 'Портретная фото мастера, минимум 300x300px',
            required: true,
          },
          {
            type: 'string',
            label: 'Instagram',
            name: 'instagram',
            description: 'Полная ссылка на профиль (опционально)',
            ui: {
              validate: (value: any) => {
                if (value && !value.startsWith('http')) {
                  return 'Введите полную ссылку (https://...)';
                }
              },
            },
          },
          {
            type: 'string',
            label: 'Telegram',
            name: 'telegram',
            description: 'Полная ссылка на профиль (опционально)',
            ui: {
              validate: (value: any) => {
                if (value && !value.startsWith('http')) {
                  return 'Введите полную ссылку (https://...)';
                }
              },
            },
          },
          {
            type: 'number',
            label: 'Порядок отображения',
            name: 'order',
            description: 'Мастера сортируются по этому значению (по возрастанию)',
          },
          {
            type: 'boolean',
            label: 'Активен',
            name: 'isActive',
            description: 'Показывать ли этого мастера на сайте',
          },
        ],
      },

      /**
       * Коллекция "Gallery" (Галерея)
       * Синхронизирована с src/content/gallery/
       */
      {
        label: 'Галерея',
        name: 'gallery',
        path: 'src/content/gallery',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Название работы',
            name: 'title',
            description: 'Например: Перманентный макияж бровей',
            required: true,
          },
          {
            type: 'string',
            label: 'Категория',
            name: 'category',
            description: 'Тип услуги',
            required: true,
            options: [
              { label: 'Брови', value: 'brouws' },
              { label: 'Губы', value: 'lips' },
              { label: 'Межресничка', value: 'eyeliner' },
              { label: 'Ногти', value: 'nails' },
              { label: 'Уход за лицом', value: 'face' },
              { label: 'Другое', value: 'other' },
            ],
          },
          {
            type: 'string',
            label: 'Описание',
            name: 'description',
            description: 'Описание выполненной работы',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            label: 'Фото "До"',
            name: 'imageBefore',
            description: 'Фотография до процедуры',
            required: true,
          },
          {
            type: 'image',
            label: 'Фото "После"',
            name: 'imageAfter',
            description: 'Фотография после процедуры',
            required: true,
          },
          {
            type: 'string',
            label: 'Имя мастера',
            name: 'masterName',
            description: 'Кто выполнил работу (опционально)',
          },
          {
            type: 'datetime',
            label: 'Дата выполнения',
            name: 'date',
            description: 'Когда была выполнена работа (опционально)',
          },
          {
            type: 'number',
            label: 'Порядок отображения',
            name: 'order',
            description: 'Работы сортируются по этому значению (по возрастанию)',
          },
          {
            type: 'boolean',
            label: 'Активна',
            name: 'isActive',
            description: 'Показывать ли эту работу на сайте',
          },
        ],
      },
    ],
  },
});
