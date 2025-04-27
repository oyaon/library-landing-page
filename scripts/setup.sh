#!/bin/bash

# Library Landing Page Setup Script
echo "Setting up Library Landing Page project..."

# Create project with Next.js, TypeScript, and Tailwind CSS
npx create-next-app@latest my-library-landing-page --typescript --tailwind --eslint

# Navigate to project directory
cd my-library-landing-page

# Install dependencies
echo "Installing required packages..."
npm install framer-motion@^12.9.2 lucide-react@^0.503.0 react-parallax-tilt@^1.7.293 react-countup@^6.5.3 @headlessui/react@^2.2.2 @radix-ui/react-toast@^1.2.11

# Install dev dependencies
npm install -D @tailwindcss/forms @tailwindcss/typography

# Create directory structure
echo "Creating directory structure..."
mkdir -p components/ui
mkdir -p sections
mkdir -p public/books
mkdir -p public/events
mkdir -p styles

# Update tailwind.config.js to include plugins
echo "Updating Tailwind configuration..."
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        border: 'var(--border)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
EOL

echo "Setup complete! Run 'npm run dev' to start the development server."
