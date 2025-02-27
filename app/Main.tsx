'use client'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import {useState, useEffect} from 'react'


export default function Home() {

  const [displayedInfo, setDisplayedInfo] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const infroArray = [
    `${siteMetadata.CurrentPosition} at ${siteMetadata.CurrentCompany}`,
    `${siteMetadata.Education} at ${siteMetadata.University}`
  ]

  useEffect (() => {
    let typingTimer;
    let currentText = infroArray[currentIndex]
    let charIndex = 0;

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
    };

    const erase = () => {
      if (charIndex > 0) {
        setDisplayedInfo(currentText.slice(0, charIndex));
        charIndex--;
        typingTimer = setTimeout(erase, 30);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % infroArray.length);
      }
    };

    if (isTyping) {
      type();
    } 
    return () => clearTimeout(typingTimer);
    }, [currentIndex, isTyping]);

  return (
    <div className="min-h-[45vh] flex flex-col">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello World!
          </h1>
          <p className="text-2xl font-bold leading-7 text-gray-500 dark:text-white">
            I am {siteMetadata.firstName}
          </p>
          <p className="text-lg leading-7 font-bold text-gray-500 dark:text-white">
            {displayedInfo}
            <span className="animate-blink">|</span>
          </p>
          <p className="text-lg font-bold leading-7 text-gray-500 dark:text-white">
            Know more <Link href="/about" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">about me</Link> and <Link href="/projects" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">my work</Link> 
          </p>
        </div>
    </div>
  </div>
  )
}
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    

