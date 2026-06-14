import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Goodnight, From Here',
  description: 'A deeply emotional, cinematic interactive love-letter website',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#070912',
  openGraph: {
    title: 'Goodnight, From Here',
    description: 'A deeply emotional, cinematic interactive love-letter website',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#070912" />
      </head>
      <body className="bg-night-darker">
        {children}
      </body>
    </html>
  );
}
