import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import { StarsBackground } from '@/components/StarsBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Planetário',
  description: 'Explore imagens da NASA 🪐',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Providers
          ipInfoToken={process.env.IPINFO_TOKEN!}
          appToken={process.env.APP_TOKEN!}
          appName={process.env.APP_NAME!}
          appApiUrl={process.env.APP_API_URL!}
        >
          <StarsBackground />
          {children}
        </Providers>
      </body>
    </html>
  )
}
