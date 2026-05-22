import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Book of Secret Knowledge',
  description: 'A comprehensive collection of CLI tools, utilities, and commands for system administrators, DevOps, and security professionals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
