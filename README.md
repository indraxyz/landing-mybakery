# MyBakery - Landing Page

A modern, responsive bakery landing page built with React Router v7, TypeScript, and Tailwind CSS v4. Features server-side rendering, dark/light theme support, and smooth animations.

## Features

- **Server-Side Rendering (SSR)** - Built-in SSR for improved SEO and initial load performance
- **Dark/Light/System Theme** - Full theme support with system preference detection and persistence
- **Responsive Design** - Mobile-first approach with optimized layouts for all screen sizes
- **Interactive Carousels** - Swiper-powered image sliders with autoplay, pagination, and fade effects
- **Smooth Navigation** - Single-page application with smooth scroll navigation between sections
- **Modern UI Components** - Reusable components built with Radix UI primitives and shadcn/ui patterns
- **Type Safety** - Full TypeScript support with strict mode enabled
- **Hot Module Replacement** - Fast development experience with Vite HMR

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [React Router v7](https://reactrouter.com/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) |
| Carousel | [Swiper](https://swiperjs.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Utilities | [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge), [class-variance-authority](https://cva.style/) |

## Project Structure

```
landing-bakery/
├── app/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── background-image.tsx
│   │   │   ├── button.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── image.tsx
│   │   ├── about-section.tsx      # About section with image grid
│   │   ├── contact-section.tsx    # Contact form and info cards
│   │   ├── footer.tsx             # Site footer with links
│   │   ├── hero-section.tsx       # Hero carousel with CTA
│   │   ├── navigation.tsx         # Fixed navbar with mobile drawer
│   │   ├── products-section.tsx   # Products carousel showcase
│   │   ├── theme-provider.tsx     # Theme initialization wrapper
│   │   └── theme-toggle.tsx       # Theme switcher dropdown
│   ├── hooks/
│   │   ├── use-mobile.ts          # Mobile breakpoint detection
│   │   └── use-theme.ts           # Theme state management
│   ├── lib/
│   │   ├── theme.ts               # Theme utilities and storage
│   │   └── utils.ts               # Utility functions (cn)
│   ├── routes/
│   │   └── home.tsx               # Home page route
│   ├── app.css                    # Global styles and CSS variables
│   ├── root.tsx                   # Root layout with theme script
│   └── routes.ts                  # Route configuration
├── public/
│   └── favicon.ico
├── .gitignore
├── Dockerfile                     # Docker deployment config
├── package.json
├── pnpm-lock.yaml
├── react-router.config.ts         # React Router SSR config
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite build configuration
```

## Sections

### 1. Navigation
- Fixed header with blur backdrop
- Desktop: Horizontal menu with hover animations
- Mobile: Drawer menu with slide-in panel
- Theme toggle dropdown (Light/Dark/System)

### 2. Hero Section
- Full-screen carousel with 3 slides
- Fade transition effect with autoplay
- Overlay text with call-to-action buttons
- Background images with lazy loading

### 3. Products Section
- Responsive product carousel (1-3 columns based on viewport)
- Product cards with hover effects
- Image zoom on hover
- Add to Cart buttons

### 4. About Section
- Two-column layout (text + image grid)
- 2x2 image grid with hover zoom effects
- Company story and values

### 5. Contact Section
- Contact info cards carousel
- Contact form with validation-ready inputs
- Fields: Name, Email, Subject, Message

### 6. Footer
- 4-column grid layout
- Quick links navigation
- Contact information
- Social media links (Facebook, Instagram, Twitter)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd landing-bakery

# Install dependencies
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Application runs at `http://localhost:5173`

### Type Checking

```bash
pnpm typecheck
```

### Production Build

```bash
pnpm build
```

### Production Server

```bash
pnpm start
```

## Theme System

The application supports three theme modes:

| Mode | Description |
|------|-------------|
| Light | Light color scheme |
| Dark | Dark color scheme |
| System | Follows OS preference |

Theme preference is stored in `sessionStorage` and applies instantly without flash on page load via an inline script in the document head.

### Theme Implementation

```typescript
// Access theme in components
import { useTheme } from "~/hooks/use-theme";

function MyComponent() {
  const [theme, setTheme, mounted] = useTheme();
  // theme: "light" | "dark" | "system"
}
```

## UI Components

### Button
Variant-based button component with multiple styles:

```tsx
import { Button } from "~/components/ui/button";

<Button variant="default">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
```

### Drawer
Mobile navigation drawer using Vaul:

```tsx
import { Drawer, DrawerTrigger, DrawerContent } from "~/components/ui/drawer";

<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent side="right">Content</DrawerContent>
</Drawer>
```

### Dropdown Menu
Radix-based dropdown for theme selection and menus:

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Deployment

### Docker

Build and run with Docker:

```bash
# Build image
docker build -t mybakery .

# Run container
docker run -p 3000:3000 mybakery
```

### Supported Platforms

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel
- Netlify

### Manual Deployment

Deploy the build output:

```
├── package.json
├── pnpm-lock.yaml
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Configuration

### React Router Config

```typescript
// react-router.config.ts
export default {
  ssr: true,  // Server-side rendering enabled
} satisfies Config;
```

### Vite Config

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
```

### TypeScript Paths

```json
{
  "paths": {
    "~/*": ["./app/*"]
  }
}
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm typecheck` | Run TypeScript type checking |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.

---

Built with React Router v7
