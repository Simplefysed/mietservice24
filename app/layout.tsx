import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mietservice24 - Professionelle Fahrzeug- und Gerätevermietung',
  description: 'Ihr zuverlässiger Partner für Häcksler, Hebebühnen, Fräsen, LKW mit Ladekran und Kleinbusse. Professioneller Mietservice mit Top-Qualität.',
  keywords: 'Mietservice, Häcksler mieten, Hebebühne mieten, Fräse mieten, LKW mit Ladekran, Kleinbus mieten, Fahrzeugvermietung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
