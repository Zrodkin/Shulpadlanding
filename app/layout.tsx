import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShulPad - Transform Your iPad Into a Donation Kiosk",
  description:
    "ShulPad helps synagogues, churches, and nonprofits collect donations with ease using Square payment integration. Increase donations by 40% with our professional kiosk solution.",
  keywords: "donation kiosk, iPad donation app, Square integration, synagogue donations, church donations, nonprofit fundraising",
  authors: [{ name: "ShulPad" }],
  creator: "ShulPad",
  publisher: "ShulPad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicon configuration
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shulpad.com',
    siteName: 'ShulPad',
    title: 'ShulPad - Transform Your iPad Into a Donation Kiosk',
    description: 'ShulPad helps synagogues, churches, and nonprofits collect donations with ease using Square payment integration.',
    images: [
      {
        url: '/images/payment-terminal-1.png',
        width: 1200,
        height: 630,
        alt: 'ShulPad Payment Terminal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShulPad - Transform Your iPad Into a Donation Kiosk',
    description: 'ShulPad helps synagogues, churches, and nonprofits collect donations with ease using Square payment integration.',
    images: ['/images/payment-terminal-1.png'],
  },
  metadataBase: new URL('https://shulpad.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://shulpad.com" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}