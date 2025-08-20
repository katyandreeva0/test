# Varialex Landing Page

A modern, responsive landing page for Varialex language learning app built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🧩 Modular component architecture
- 🎯 Optimized for conversions
- 🔧 Easy to customize and maintain

## Quick Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build` locally
2. Drag the `dist` folder to netlify.com/drop

### Option 2: Git Integration (Recommended)
1. Push this code to a GitHub repository
2. Connect the repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # Reusable UI components
├── content/              # Content and copy
├── styles/               # Global styles and Tailwind config
└── public/               # Static assets
```

## Deployment Notes

- ✅ No authentication required
- ✅ No backend dependencies
- ✅ Pure static site - works on any hosting platform
- ✅ Optimized for fast loading
- ✅ SEO-friendly with proper meta tags

## Build Output

The build process creates a `dist` folder with all static assets optimized for production deployment.

## Support

For any deployment issues, check the Netlify deploy logs or contact support.