import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#121212',
};

export const metadata: Metadata = {
  title: 'Damiru Gamage – CS Undergraduate | Software Developer & QA Engineer',
  description:
    'Portfolio of Damiru Gamage, a Computer Science undergraduate at General Sir John Kotelawala Defence University passionate about frontend development with React and TypeScript, and software quality assurance using Selenium and Postman.',
  keywords:
    'Damiru Gamage, CS Undergraduate, Software Developer, QA Engineer, React, TypeScript, JavaScript, Selenium, Postman, KDU, Portfolio',
  openGraph: {
    title: 'Damiru Gamage – CS Undergraduate | Software Developer & QA Engineer',
    description:
      'Building modern web applications and ensuring software quality through testing and automation — combining strong frontend skills with effective QA practices.',
    type: 'website',
    url: 'https://portfolio.example.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-[--bg] text-[--fg] antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

