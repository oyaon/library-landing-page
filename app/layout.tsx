import '@/styles/globals.css';
import '@/styles/theme.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Library - Discover Your Next Great Read',
  description: 'Explore our vast collection of books, join reading events, and become part of our community of book lovers. City Library offers both physical and digital resources for all ages.',
  keywords: 'library, books, reading, ebooks, audiobooks, literature, events, book club, authors',
  openGraph: {
    title: 'City Library - Discover Your Next Great Read',
    description: 'Explore our vast collection of books, join reading events, and become part of our community of book lovers.',
    url: 'https://citylibrary.example.com',
    siteName: 'City Library',
    images: [
      {
        url: 'https://citylibrary.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'City Library - Books and Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City Library - Discover Your Next Great Read',
    description: 'Explore our vast collection of books, join reading events, and become part of our community of book lovers.',
    images: ['https://citylibrary.example.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4F46E5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://citylibrary.example.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
