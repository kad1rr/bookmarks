import { LayoutProps } from '@/types'
import type { Metadata } from 'next'
import './index.css'

const metadata: Metadata = {
  title: 'Bookmarks',
  description: "It's a great place to share resources you find useful with others!",
  applicationName: 'Bookmarks',
  authors: {
    name: 'Kadir',
    url: 'https://k4dirr.vercel.app/',
  },
  creator: 'Kadir',
  generator: 'Next.js',
  icons: '/logo.png',
  keywords: [
    'bookmarks',
    'sources',
    'software',
    'software tools',
    'tools',
    'frontend',
    'backend',
    'ai',
  ],
  openGraph: {
    title: 'Bookmarks',
    description: "It's a great place to share resources you find useful with others!",
    type: 'website',
    siteName: 'Bookmarks',
  },
  publisher: 'Kadir',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export { metadata }
export default Layout
