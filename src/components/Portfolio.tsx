import { useState } from 'react'

interface Project {
  slug: string
  title: string
  type: string
  image: string
  description: string
  order: number
  category: 'done' | 'process'
  content: string
}

interface PortfolioProps {
  projects: Project[]
}

export default function Portfolio({ projects }: PortfolioProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'all' | 'done' | 'process'>('all')

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab)

  const setActiveTabAndReset = (tab: 'all' | 'done' | 'process') => {
    setActiveTab(tab)
    setCurrentProjectIndex(0)
  }

  const openLightbox = (index: number) => {
    setCurrentProjectIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    )
  }

  if (projects.length === 0) {
    return (
      <section id="portfolio" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Наши работы</h2>
          <p className="text-gray-600">Проекты загружаются позже</p>
        </div>
      </section>
    )
  }

  const currentProject = filteredProjects[currentProjectIndex]

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">
          Наши работы
        </h2>

        <div className="flex gap-3 mb-8 justify-center">
          {(['all', 'done', 'process'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTabAndReset(tab)}
              className={`px-5 py-2 rounded-md font-bold text-sm border-2 transition-colors ${
                activeTab === tab
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-dark border-dark hover:bg-gray-100'
              }`}
            >
              {tab === 'all' ? 'Все работы' : tab === 'done' ? 'Готовые работы' : 'Процесс'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="cursor-pointer overflow-hidden rounded-lg border-2 border-dark hover:shadow-md transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">{project.image}</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-dark">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            Ваш объект мы сделаем так же красиво. Пишите в Telegram!
          </p>
          <a
            href="https://t.me/ndemidov_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white font-bold rounded-md inline-block hover:opacity-90"
          >
            Написать в Telegram
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-dark hover:opacity-70"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">{currentProject.image}</p>
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentProject.description}
                  </p>
                  <div className="prose prose-sm max-w-none">
                    {currentProject.content}
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 mt-6">
                  <button
                    onClick={prevProject}
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="text-sm text-gray-600">
                    {currentProjectIndex + 1} / {filteredProjects.length}
                  </div>

                  <button
                    onClick={nextProject}
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
