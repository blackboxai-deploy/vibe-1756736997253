import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World - Next.js App',
  description: 'A simple Hello World page built with Next.js and Tailwind CSS',
  keywords: ['hello world', 'next.js', 'react', 'tailwind css'],
  authors: [{ name: 'Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <main className="min-h-full">
          {children}
        </main>
      </body>
    </html>
  )
}