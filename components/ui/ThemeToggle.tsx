'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering after client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }

  return (
    <Button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
      variant="outline"
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="mr-2 text-accent-foreground" />
      ) : (
        <Moon size={20} className="mr-2 text-foreground" />
      )}
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
}
