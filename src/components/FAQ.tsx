import { useState } from 'react'
import { faqData } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (categoryIdx: number, questionIdx: number) => {
    const index = categoryIdx * 10 + questionIdx
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Часто задаваемые вопросы</h2>
        <div className="space-y-8">
          {faqData.map((category, categoryIdx) => (
            <div key={categoryIdx}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-dark">{category.name}</h3>
              </div>
              <div className="space-y-2">
                {category.questions.map((question, questionIdx) => {
                  const index = categoryIdx * 10 + questionIdx
                  const isOpen = openIndex === index
                  return (
                    <div key={questionIdx} className="border-2 border-dark rounded-lg overflow-hidden">
                      <button onClick={() => toggleQuestion(categoryIdx, questionIdx)} className="w-full p-4 flex justify-between items-center hover:bg-gray-100 transition-colors font-bold text-dark">
                        <span className="text-left">{question.q}</span>
                        <span className="flex-shrink-0 ml-4">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && <div className="px-4 py-3 bg-white border-t-2 border-dark text-gray-600">{question.a}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
