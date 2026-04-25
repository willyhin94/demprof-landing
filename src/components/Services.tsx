const SERVICES = [
  {
    id: 1,
    title: 'Косметический ремонт',
    description:
      'Окраска стен, замена полов и плинтусов, замена дверей. Быстро и качественно.',
    icon: '🎨',
  },
  {
    id: 2,
    title: 'Капитальный ремонт',
    description:
      'Полная переделка: электрика, сантехника, выравнивание стен, новые полы и потолки.',
    icon: '🔨',
  },
  {
    id: 3,
    title: 'Ремонт под ключ',
    description:
      'От замера до финальной сдачи. Вы просто получаете готовую квартиру.',
    icon: '🏠',
  },
  {
    id: 4,
    title: 'Дизайн-проект',
    description:
      'Визуализация, планировка, подбор материалов. Отдельно или с ремонтом.',
    icon: '✨',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">
          Наши услуги
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 border-2 border-dark rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <a
                href="https://t.me/ndemidov_portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:opacity-70"
              >
                Узнать больше →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
