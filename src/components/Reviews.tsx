import { useState } from 'react'

const REVIEWS = [
  { id: 1, name: 'Иван Петров', type: 'Капитальный ремонт', text: 'Отличная работа! Всё сделали в срок, качество на высоте.', rating: 5, photo: '/avatars/ivan.jpg' },
  { id: 2, name: 'Елена Сидорова', type: 'Ремонт под ключ', text: 'Очень доволены результатом. Мастера вежливые, работали чисто.', rating: 5, photo: '/avatars/elena.jpg' },
  { id: 3, name: 'Дмитрий Иванов', type: 'Косметический ремонт', text: 'Быстро и качественно. Смета совпала с окончательной стоимостью.', rating: 5, photo: '/avatars/dmitry.jpg' },
  { id: 4, name: 'Ольга Новикова', type: 'Ремонт в новостройке', text: 'Дизайнеры подобрали всё идеально. Визуализация совпала с реальностью.', rating: 5, photo: '/avatars/olga.jpg' },
  { id: 5, name: 'Алексей Смирнов', type: 'Ремонт под ключ', text: 'Рекомендую всем! Профессиональная команда, никаких сюрпризов со сметой.', rating: 5, photo: '/avatars/alexey.jpg' },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
  const prevReview = () => setCurrentIndex((prev) => prev === 0 ? REVIEWS.length - 1 : prev - 1)

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Отзывы клиентов</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {REVIEWS.slice(currentIndex, currentIndex + 2).map((review) => (
              <div key={review.id} className="p-6 bg-white border-2 border-dark rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.type}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">{Array(review.rating).fill(0).map((_, i) => <span key={i} className="text-lg">⭐</span>)}</div>
                <p className="text-gray-600 italic">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button onClick={prevReview} className="p-2 hover:bg-gray-100 rounded-md transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <div className="flex gap-2">{REVIEWS.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'}`} />)}</div>
            <button onClick={nextReview} className="p-2 hover:bg-gray-100 rounded-md transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  )
}
