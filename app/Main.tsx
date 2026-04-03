'use client'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'

export default function Home() {
  const [displayedInfo, setDisplayedInfo] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const infoArray = useMemo(
    () => [
      `${siteMetadata.University}`,
      `${siteMetadata.CurrentStatus}`,
      `${siteMetadata.CurrentPosition} @ ${siteMetadata.CurrentCompany}`,
    ],
    []
  )

  useEffect(() => {
    let typingTimer: NodeJS.Timeout
    const currentText = infoArray[currentIndex]
    let charIndex = 0

    const type = () => {
      if (charIndex <= currentText.length) {
        setDisplayedInfo(currentText.slice(0, charIndex))
        charIndex++
        typingTimer = setTimeout(type, 50)
      } else {
        setTimeout(() => {
          setIsTyping(false)
          setTimeout(erase, 2000)
        }, 1000)
      }
    }

    const erase = () => {
      if (charIndex > 0) {
        setDisplayedInfo(currentText.slice(0, charIndex))
        charIndex--
        typingTimer = setTimeout(erase, 30)
      } else {
        setIsTyping(true)
        setCurrentIndex((prev) => (prev + 1) % infoArray.length)
      }
    }

    if (isTyping) {
      type()
    }
    return () => clearTimeout(typingTimer)
  }, [currentIndex, isTyping, infoArray])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Decorative gradient blobs — bleed to full viewport edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gray-200/20 blur-3xl dark:bg-gray-700/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-gray-300/10 blur-3xl dark:bg-gray-600/10"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-7xl xl:px-8">
        <div className="flex min-h-[92vh] flex-col justify-center py-16 sm:py-24">
          {/* Status badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to opportunities
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:text-7xl">
            Hello World! 👋
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
              I&apos;m {siteMetadata.firstName}
            </span>
          </h1>

          {/* Typing animation */}
          <div className="mt-5 flex h-8 items-center">
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 sm:text-xl">
              {displayedInfo}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-blink bg-primary-500 align-middle"></span>
            </p>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Software Engineer passionate about building elegant solutions to complex problems.
            Explore{' '}
            <Link
              href="/#about"
              className="font-semibold text-primary-600 underline-offset-2 hover:underline dark:text-primary-400"
            >
              my background
            </Link>{' '}
            and{' '}
            <Link
              href="/#projects"
              className="font-semibold text-primary-600 underline-offset-2 hover:underline dark:text-primary-400"
            >
              my projects
            </Link>
            .
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Get in touch
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary-400 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:text-primary-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              View projects
            </Link>
          </div>

          {/* Quick social links */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm text-gray-400 dark:text-gray-500">Find me on:</span>
            {[
              {
                label: 'GitHub',
                href: siteMetadata.github,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: siteMetadata.linkedin,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: 'X / Twitter',
                href: siteMetadata.x,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-400 hover:text-primary-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-start">
            <Link
              href="/#about"
              aria-label="Scroll to about section"
              className="flex flex-col items-center gap-1 text-xs text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
            >
              <span>Scroll</span>
              <svg
                className="h-4 w-4 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Resume section */}
        <div className="pb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Resume</h2>
            <a
              href="/Ramachandra_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-primary-400 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in new tab
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg dark:border-gray-700">
            <div className="h-[75vh] min-h-[500px] w-full bg-gray-100 dark:bg-gray-800">
              <iframe
                src="/Ramachandra_Software_Engineer.pdf"
                title="Ramachandra Resume"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end inner content container */}
    </div>
  )
}
