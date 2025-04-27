import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#EEF2FF',
        background: '#F9FAFB',
        foreground: '#111827',
        accent: '#6366F1',
        muted: '#6B7280',
        'accent-foreground': '#E0E7FF',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
