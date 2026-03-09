'use client'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import {useState, useEffect} from 'react'


export default function Home() {

  const [displayedInfo, setDisplayedInfo] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const infroArray = [
    `${siteMetadata.University}`,
    `${siteMetadata.CurrentStatus}`,

  ]

  useEffect (() => {
    let typingTimer: NodeJS.Timeout;
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
            Know more <Link href="/#about" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">about me</Link> and <Link href="/#projects" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">my work</Link>
          </p>

          <div className="pt-8">
            <p className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Here is my Resume
            </p>
            <div className="overflow-auto rounded-lg border-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="h-[70vh] min-h-[400px] w-full">
                <iframe
                  src="/Ramachandra_Software_Engineer.pdf"
                  title="Ramachandra Resume"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="/Ramachandra_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline link-underline-black text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Open resume in new tab
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
      