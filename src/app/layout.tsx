import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/layout/Navbar'
import { cn } from '@/lib/utils'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open News | Crypto Encyclopedia',
  description: "World's Largest Crypto Knowledge Base",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, 'bg-brand')}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
