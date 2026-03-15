import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Utti Ramesh | Freelance React & Next.js Developer',
  description: 'Senior freelance React developer with 7.6+ years of experience. I help founders and teams ship premium frontend experiences with React, Next.js, and TypeScript.',
  keywords: ['React Developer', 'Next.js Developer', 'Freelance Frontend Developer', 'React Performance Optimization', 'Frontend Architecture'],
  authors: [{ name: 'Utti Ramesh' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg?v=2',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
