# Next.js Application

A modern, fast, and scalable web application built with Next.js, React, and Tailwind CSS.

## Features

- ⚡ **Fast Performance** - Built with Next.js for optimal performance and SEO optimization
- 🎨 **Modern Design** - Beautiful, responsive design with Tailwind CSS
- 🔒 **Type Safe** - Built with TypeScript for better development experience
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🚀 **Static Export** - Configured for static site generation and GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19
- **Development**: ESLint, Hot Reload
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd githubpages_agent
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:12000](http://localhost:12000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Navigation.tsx     # Navigation component
public/                    # Static assets
.github/
└── workflows/
    └── deploy.yml         # GitHub Actions deployment
```

## Pages

- **Home** (`/`) - Landing page with features overview
- **About** (`/about`) - Information about the application and tech stack
- **Contact** (`/contact`) - Contact form with validation

## Deployment

This application is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. The static files will be generated in the `out` directory.

### GitHub Pages Deployment

The application automatically deploys to GitHub Pages when you push to the main branch. The deployment workflow:

1. Installs dependencies
2. Builds the Next.js application
3. Exports static files
4. Deploys to GitHub Pages

## Configuration

### Next.js Configuration

The application is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

### Tailwind CSS

Tailwind CSS is configured with the latest version (v4) for modern styling capabilities.

## Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your component
3. The page will be automatically available at the route

### Adding Components

1. Create new components in `src/components/`
2. Export them for use in pages
3. Follow TypeScript best practices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
