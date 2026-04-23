import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vincent Ng',
  description: 'Full-stack developer specialising in AI-powered systems and scalable cloud infrastructure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
