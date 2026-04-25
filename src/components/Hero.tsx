import Link from 'next/link'

const TELEGRAM_URL = 'https://t.me/ndemidov_portfolio'
const INSTAGRAM_URL = 'https://www.instagram.com/dem_prof'

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-dark mb-6">
              Ремонт квартиры под ключ — в срок и без стресса
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Полный ремонт от замера до финальной сдачи. Никаких скрытых доплат, только честная смета и гарантия 2 года.
            </p>

            {/* Trust Stats */}
            <div className="mb-12 flex flex-col sm:flex-row gap-8">
              <div>
                <div className="text-3xl font-extrabold text-primary">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">100+</div>
                <div className="text-sm text-gray-600">завершённых проектов</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">2</div>
                <div className="text-sm text-gray-600">года гарантии</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="px-6 py-3 bg-accent text-dark font-bold rounded-md text-center hover:opacity-90 transition-opacity"
              >
                Прикинуть стоимость
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-dark text-white font-bold rounded-md text-center hover:opacity-90 transition-opacity"
              >
                Смотреть работы
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Место для фото готового проекта</p>
          </div>
        </div>
      </div>
    </section>
  )
}
