import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import Main from './Main'
import AuthorLayout from '@/layouts/AuthorLayout'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors | undefined
  const mainContent = author ? coreContent(author) : null

  return (
    <>
      <section id="home" className="min-h-screen">
        <Main />
      </section>

      {author && mainContent && (
        <section id="about" className="min-h-screen scroll-mt-20">
          <AuthorLayout content={mainContent}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        </section>
      )}

      <section id="projects" className="min-h-screen scroll-mt-20">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Some of the projects I have worked on.
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen scroll-mt-20 py-12">
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
