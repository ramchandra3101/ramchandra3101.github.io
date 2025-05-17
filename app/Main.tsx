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
            Know more <Link href="/about" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">about me</Link> and <Link href="/projects" className="link-underline link-underline-black text-black dark:text-white dark:hover:text-gray-300">my work</Link> 
          </p>

          <div className="flex items-center justify-center pt-8">
      <Link 
        href= "https://github.com/ramchandra3101/Resume_SDE/blob/main/Ramchandra_SWEII.pdf"
        className="btn btn-primary bg-black text-white dark:text-black dark:bg-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 bg-"
      >
        View My Resume
      </Link>
    </div>
    </div>
        

     

    </div>
  </div>
  )
}
      