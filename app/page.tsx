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
      {/* Hero / Home — full viewport width, no container */}
      <section id="home">
        <Main />
      </section>

      {/* All other sections constrained to readable max-width */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-7xl xl:px-8">
        {/* About */}
        {author && mainContent && (
          <section id="about" className="scroll-mt-20 py-4">
            <AuthorLayout content={mainContent}>
              <MDXLayoutRenderer code={author.body.code} />
            </AuthorLayout>
          </section>
        )}

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Featured <span className="text-primary-500">Projects</span>
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary-500"></div>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              A selection of things I&apos;ve built — from ML models to full-stack apps.
            </p>
          </div>
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
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <ContactForm />
        </section>
      </div>
    </>
  )
}
