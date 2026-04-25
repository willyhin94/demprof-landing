const ADVANTAGES = [
  { id: 1, title: 'Опыт во всех типах ремонта', description: 'Новостройки, вторичка, коммерция. Знаем все нюансы.', icon: '⭐' },
  { id: 2, title: 'Фиксированная смета без сюрпризов', description: 'Честно считаем, подробно описываем. Никаких доплат.', icon: '💰' },
  { id: 3, title: 'Свои мастера, проверенное качество', description: 'Не нанимаем подрядчиков. Наши сотрудники.', icon: '👷' },
  { id: 4, title: 'Гарантия 2 года на все работы', description: 'Что-то отвалится — чиним бесплатно.', icon: '🛡️' },
  { id: 5, title: 'Бесплатный замер и консультация', description: 'Осматриваем, считаем. Не навязываем услуги.', icon: '🎯' },
]

export default function Why() {
  return (
    <section id="why" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Почему DemProf</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((advantage) => (
            <div key={advantage.id} className="p-6 bg-white border-2 border-dark rounded-lg">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
