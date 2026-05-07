# Modern Landing Page

A stunning, responsive landing page built with Next.js, React, Tailwind CSS, and TypeScript. Features smooth animations, a contact form, and a modern design system.

## Features

- ⚡ **Lightning Fast** - Optimized with Next.js App Router
- 🎨 **Beautiful Design** - Built with Tailwind CSS for stunning layouts
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Engaging micro-interactions and transitions
- 📧 **Contact Form** - Ready-to-use contact form component
- 🔧 **Easy to Customize** - Simple, modular component structure
- 🚀 **Deploy Anywhere** - Works with Vercel, Netlify, or any Node.js hosting

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and animations
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
```

## Components

### Header
Sticky navigation with mobile menu support and responsive design.

### Hero
Eye-catching hero section with gradient text, CTAs, and animations.

### Features
Showcase of 6 key features with hover effects and icons.

### Contact
Fully functional contact form with validation and success message.

### Footer
Multi-column footer with links and social media.

## Customization

### Change Colors
Edit the gradient classes and color values in each component. The site uses blue (`blue-600`) and purple (`purple-600`) as primary colors.

### Change Brand Name
Replace "Brand" text in `Header.tsx` and `Footer.tsx` with your brand name.

### Update Content
Modify the text, features, and links in each component to match your needs.

### Add Your Contact Handler
Update the `handleSubmit` function in `Contact.tsx` to send form data to your backend.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The app can be deployed to any platform that supports Node.js:
- Netlify
- AWS
- DigitalOcean
- Heroku
- Docker

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is open source and available under the MIT License.
