const PACKAGES = [
  { id: 1, title: 'Косметический ремонт', price: '2500-4000', duration: 'до 1 месяца', popular: false, features: ['Окраска стен и потолка', 'Замена полов', 'Замена плинтусов и дверей', 'Уборка после работ'] },
  { id: 2, title: 'Капитальный ремонт', price: '5000-8000', duration: '2-3 месяца', popular: false, features: ['Полная переделка электрики', 'Замена водопровода', 'Выравнивание стен', 'Новые полы и отделка'] },
  { id: 3, title: 'Ремонт под ключ', price: '8000-12000', duration: 'от 6 месяцев', popular: true, features: ['Всё из капитального + дизайн-проект', 'Подбор материалов и мебели', 'Авторский надзор', 'Финальная уборка и расстановка'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Стоимость услуг</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`relative p-8 rounded-lg border-2 transition-all ${pkg.popular ? 'border-primary bg-primary/5 shadow-lg' : 'border-dark bg-white'}`}>
              {pkg.popular && <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">⭐ Популярный выбор</div>}
              <h3 className="text-2xl font-bold text-dark mb-2">{pkg.title}</h3>
              <div className="mb-6"><div className="text-4xl font-extrabold text-primary mb-1">{pkg.price}₽</div><p className="text-sm text-gray-600">за м²</p></div>
              <div className="mb-6"><p className="text-sm text-gray-600"><strong>Сроки:</strong> {pkg.duration}</p></div>
              <div className="mb-8"><p className="text-sm font-bold text-dark mb-3">Включает:</p><ul className="space-y-2">{pkg.features.map((f, i) => <li key={i} className="flex gap-2 text-sm"><span className="text-success flex-shrink-0">✓</span><span className="text-gray-600">{f}</span></li>)}</ul></div>
              <a href="https://t.me/ndemidov_portfolio" target="_blank" rel="noopener noreferrer" className={`block w-full px-4 py-3 font-bold rounded-md text-center transition-opacity hover:opacity-90 ${pkg.popular ? 'bg-primary text-white' : 'bg-dark text-white'}`}>Рассчитать точно</a>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-white border-2 border-dark rounded-lg">
          <p className="text-sm text-gray-600">Цены указаны за работу без учёта стоимости материалов. Точная стоимость определяется после обсуждения всех деталей.</p>
        </div>
      </div>
    </section>
  )
}
