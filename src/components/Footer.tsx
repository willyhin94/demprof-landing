const TELEGRAM_URL = 'https://t.me/ndemidov_portfolio'
const INSTAGRAM_URL = 'https://www.instagram.com/dem_prof'
const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#portfolio' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold mb-3">DemProf</h3>
            <p className="text-sm text-gray-400">Полный ремонт квартир с гарантией. Более 15 лет опыта, 100+ проектов.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <div className="space-y-2">{NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>)}</div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400"><p>Telegram: @ndemidov_portfolio</p><p>Режим работы: ежедневно 9:00–21:00</p></div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Соцсети</h4>
            <div className="flex gap-4"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Telegram</a></div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-8">
          <p className="text-center text-sm text-gray-500">© 2026 DemProf. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
