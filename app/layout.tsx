import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),

  // ── Page title & per-page template ───────────────────────────────────────
  title: {
    default: siteMetadata.pageTitle ?? siteMetadata.title,
    template: `%s | ${siteMetadata.shortTitle}`,
  },

  // ── Meta description — shown in Google search snippets ───────────────────
  description: siteMetadata.description,

  // ── Keywords ─────────────────────────────────────────────────────────────
  keywords: siteMetadata.keywords,

  // ── Authorship ───────────────────────────────────────────────────────────
  authors: [{ name: siteMetadata.author, url: siteMetadata.siteUrl }],
  creator: siteMetadata.author,

  // ── Open Graph — controls LinkedIn / Slack / iMessage unfurl previews ────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.shortTitle,
    title: siteMetadata.pageTitle ?? siteMetadata.title,
    description: siteMetadata.ogDescription ?? siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 400,
        height: 400,
        alt: `${siteMetadata.author} — Full-Stack & AI Engineer`,
      },
    ],
  },

  // ── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary',
    title: siteMetadata.pageTitle ?? siteMetadata.title,
    description: siteMetadata.description,
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    images: [siteMetadata.ogImage],
  },

  // ── Canonical & alternates ───────────────────────────────────────────────
  alternates: {
    canonical: siteMetadata.siteUrl,
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },

  // ── Crawler directives ───────────────────────────────────────────────────
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <ScrollToHash />
          <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 xl:max-w-7xl xl:px-8">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
              </SearchProvider>
            </div>
            <main className="w-full flex-grow">{children}</main>
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 xl:max-w-7xl xl:px-8">
              <Footer />
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
