export default function Guarantees() {
  const guar = [
    { id: 1, title: 'Официальный договор', description: 'Всё оформляется официально. Договор, акт, гарантийный талон.', icon: '📄' },
    { id: 2, title: 'Гарантия на работы', description: '2 года гарантии. При дефектах по нашей вине — чиним бесплатно.', icon: '🛡️' },
    { id: 3, title: 'Ответственность за сроки', description: 'Сроки в договоре. Срыв по нам = скидка с счёта.', icon: '⏰' },
  ]
  return (
    <section id="guarantees" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Гарантии</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guar.map((g) => <div key={g.id} className="p-6 bg-dark border-2 border-white rounded-lg"><div className="text-4xl mb-4">{g.icon}</div><h3 className="text-xl font-bold mb-3">{g.title}</h3><p className="text-gray-300">{g.description}</p></div>)}
        </div>
      </div>
    </section>
  )
}
