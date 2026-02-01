# Kevin Coalwell Portfolio

A modern, dark-themed portfolio website built with React and Vite, targeting the Chrome Industries Graphic Design + Content Manager position.

## Features

- **Dark & Bold Aesthetic**: Matches Chrome Industries' edgy urban brand identity
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Interactive Case Studies**: Modal-based project deep dives
- **Skills Visualization**: Animated progress bars for skill proficiency
- **Contact Form**: Ready for backend integration

## Tech Stack

- React 18
- Vite
- CSS Variables for theming
- Intersection Observer API for animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clean any existing dependencies (if present)
rm -rf node_modules package-lock.json

# Initialize git (if not already done)
git init
git branch -m main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### First Commit

After running `npm install`, create your initial commit:

```bash
git add .
git commit -m "Initial portfolio setup with Vite + React"
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Work.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-accent-primary: #00D4AA;
  --color-accent-secondary: #3B82F6;
  --color-accent-tertiary: #10B981;
}
```

### Content

Update the case studies in `src/components/Work.jsx` and experience/skills in `src/components/About.jsx`.

## Deployment

The site can be deployed to any static hosting service:

- Vercel: `vercel`
- Netlify: Connect your Git repository
- GitHub Pages: `npm run build` and deploy the `dist` folder

## License

MIT
