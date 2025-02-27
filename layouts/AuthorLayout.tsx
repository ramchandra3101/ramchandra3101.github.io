import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import EmailRevealbox from '@/components/EmailRevealbox'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 dark:bg-blue-400"></div>
        </div>

        {/* Main Content Grid */}
        <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Profile Card */}
          <div className="col-span-12 mb-10 md:col-span-4 md:mb-0">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:shadow-xl dark:bg-gray-800/50 dark:shadow-gray-800/30">
              <div className="p-6 text-center">
                {avatar && (
                  <div className="mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-700">
                    <Image
                      src={avatar}
                      alt={`Avatar of ${name}`}
                      width={300}
                      height={300}
                      className="h-100 w-100 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
                
                <div className="mb-1 text-lg font-medium text-gray-700 dark:text-gray-300">
                  {occupation}
                </div>
                
                <div className="mb-6 text-gray-500 dark:text-gray-400">
                  {company}
                </div>
                
                <div className="flex justify-center space-x-4">
                  {email && <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />}
                  {github && <SocialIcon kind="github" href={github} size={6} />}
                  {linkedin && <SocialIcon kind="linkedin" href={linkedin} size={6} />}
                  {twitter && <SocialIcon kind="x" href={twitter} size={6} />}
                 
                </div>
              </div>
            </div>
            <div>
            {email && (
              <EmailRevealbox email={email} />
            )}
            </div>
          </div>
          
          
          {/* Biography Content */}
          <div className="col-span-12 md:col-span-8">
            <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800/50 md:p-8">
              <article className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-headings:text-white dark:prose-p:text-gray-300">
                {children}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}