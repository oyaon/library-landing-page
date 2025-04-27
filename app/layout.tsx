import React from 'react';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Modern Library for Modern Developers',
  description: 'A powerful, flexible, and intuitive library designed to solve complex problems with elegant solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
