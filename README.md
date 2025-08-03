# Studio Bright Design - Interior Design Portfolio

A modern, responsive portfolio website showcasing interior design transformations and services.

## Features

- **Responsive Design**: Optimized for all devices
- **Before & After Gallery**: Interactive portfolio showcasing design transformations
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured content

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd studio-bright-design
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Portfolio gallery
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Customization

### Colors and Styling

The project uses Tailwind CSS with custom colors defined in `tailwind.config.ts`. You can customize the color scheme by modifying the theme configuration.

### Content

Update the content in the component files:

- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Portfolio.tsx` - Portfolio projects
- `src/components/Footer.tsx` - Footer information

### Images

Replace the placeholder images in the `public/` directory with your own:

- `public/placeholder.svg` - Hero background image
- `public/before-and-after/` - Portfolio images

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is private and proprietary to Studio Bright Design.
