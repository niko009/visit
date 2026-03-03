# Beauty Salon Website

Modern, SEO-optimized website built with Astro 5.x, Tailwind CSS, and TypeScript.

## 🚀 Tech Stack

- **Framework**: Astro 5.x (SSG)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data Layer**: Content Collections with Zod validation
- **CMS**: Git-based (TinaCMS integration pending)

## 📁 Project Structure

```
src/
├── assets/          # Optimized images
│   ├── services/    # Service images
│   └── masters/     # Team member photos
├── components/      # Reusable UI components
├── content/         # Content Collections (source of truth)
│   ├── config.ts    # Zod schemas
│   ├── services/    # Services data (JSON)
│   └── masters/     # Team members data (JSON)
├── layouts/         # Page layouts
└── pages/           # File-based routing
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

Content is managed through JSON files in the `src/content/` directory.

### Adding a Service

Create a new JSON file in `src/content/services/`:

```json
{
  "name": "Service Name",
  "price": 5000,
  "duration": 120,
  "description": "Detailed description...",
  "image": "../../assets/services/image.jpg",
  "order": 1,
  "isActive": true
}
```

### Adding a Team Member

Create a new JSON file in `src/content/masters/`:

```json
{
  "name": "Full Name",
  "position": "Position Title",
  "experience": 5,
  "bio": "Biography...",
  "photo": "../../assets/masters/photo.jpg",
  "instagram": "https://instagram.com/username",
  "order": 1,
  "isActive": true
}
```

## 🎨 Customization

Edit `tailwind.config.mjs` to customize:
- Brand colors
- Typography
- Spacing
- Custom utilities

## 📦 Build

The project builds to static HTML/CSS/JS. Deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

## 🔒 Environment Variables

Create a `.env` file:

```
PUBLIC_SITE_URL=https://your-domain.com
```

## 📄 License

Private project. All rights reserved.
