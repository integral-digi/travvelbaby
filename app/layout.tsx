import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Connecting Creators and Fans',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
