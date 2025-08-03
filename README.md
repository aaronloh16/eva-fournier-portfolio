# Eva Fournier - Interior Design Portfolio

A modern, responsive portfolio website showcasing interior design transformations and services.

## Features

- **Responsive Design**: Optimized for all devices
- **Before & After Gallery**: Interactive portfolio showcasing design transformations
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured content
- **WebP Images**: Optimized images for faster loading

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
- ImageMagick (for image optimization)

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

3. Install ImageMagick for image optimization:

```bash
# macOS
brew install imagemagick

# Ubuntu
sudo apt-get install imagemagick

# Windows
# Download from https://imagemagick.org/
```

4. Optimize images:

```bash
npm run optimize-images
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Set source to "GitHub Actions"
3. **Automatic Deployment**: The site will automatically deploy on every push to main

The site will be available at: `https://yourusername.github.io/studio-bright-design/`

### Manual Deployment

You can also deploy to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## Performance Optimizations

### Image Optimization

- **WebP Format**: All images are converted to WebP for better compression
- **Responsive Sizes**: Multiple image sizes for different screen sizes
- **Lazy Loading**: Images load as needed for better performance
- **Quality Settings**: Optimized quality (85%) for web use

### Build Optimizations

- **Code Splitting**: Vendor and UI libraries are split into separate chunks
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: All assets are minified for production
- **Source Maps**: Disabled for smaller bundle size

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

public/
├── optimized/          # Optimized WebP images
└── before-and-after/   # Original portfolio images
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

Replace the images in the `public/` directory with your own:

- `src/assets/hero-interior.jpg` - Hero background image
- `public/before-and-after/` - Portfolio images

Then run `npm run optimize-images` to create optimized versions.

## License

This project is private and proprietary to Eva Fournier.
