import type { Metadata } from 'next'
import './globals.css'
import Portfolio from './page'

export const metadata: Metadata = {
  title: "Nessim's Portfolio",
  description: "Nessim's personal portfolio showcasing projects and skills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
