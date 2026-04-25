'use client'

import { useState } from 'react'

const WORK_TYPES = [
  { id: 'demolition', label: 'Демонтаж', price: 500 },
  { id: 'walls', label: 'Выравнивание стен', price: 1200 },
  { id: 'tiles', label: 'Укладка плитки', price: 2000 },
  { id: 'painting', label: 'Окраска стен и потолка', price: 600 },
  { id: 'drywall', label: 'Монтаж гипсокартона', price: 800 },
  { id: 'electric', label: 'Электрика', price: 1500 },
  { id: 'plumbing', label: 'Сантехника', price: 1800 },
  { id: 'flooring', label: 'Ламинат или паркет', price: 1200 },
  { id: 'ceiling', label: 'Натяжной потолок', price: 400 },
  { id: 'doors', label: 'Двери и косметика', price: 500 },
]

export default function Calculator() {
  const [selectedWorks, setSelectedWorks] = useState<Set<string>>(new Set())
  const [area, setArea] = useState(50)

  const toggleWork = (workId: string) => {
    const newSelected = new Set(selectedWorks)
    if (newSelected.has(workId)) newSelected.delete(workId)
    else newSelected.add(workId)
    setSelectedWorks(newSelected)
  }

  const totalPrice = Array.from(selectedWorks).reduce((sum, workId) => {
    const work = WORK_TYPES.find((w) => w.id === workId)
    return sum + (work?.price || 0) * area
  }, 0)

  const minPrice = Math.max(0, totalPrice * 0.9)
  const maxPrice = totalPrice * 1.1

  return (
    <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Калькулятор стоимости</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-dark mb-4">Выберите услуги</h3>
            <div className="space-y-3">
              {WORK_TYPES.map((work) => (
                <label key={work.id} className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-50 rounded-md">
                  <input type="checkbox" checked={selectedWorks.has(work.id)} onChange={() => toggleWork(work.id)} className="w-5 h-5 cursor-pointer" />
                  <span className="text-sm font-medium text-dark">{work.label}</span>
                  <span className="ml-auto text-xs text-gray-500">{work.price}₽/м²</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-dark mb-6">Укажите площадь</h3>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600">Площадь, м²</label>
                <span className="text-2xl font-bold text-primary">{area}</span>
              </div>
              <input type="range" min="20" max="200" value={area} onChange={(e) => setArea(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg" />
              <div className="flex justify-between text-xs text-gray-500 mt-2"><span>20</span><span>200</span></div>
            </div>
            {selectedWorks.size > 0 ? (
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-2">Примерная стоимость за работу:</p>
                <div className="text-3xl font-extrabold text-primary mb-4">{Math.round(minPrice / 1000)}k — {Math.round(maxPrice / 1000)}k ₽</div>
                <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-md mb-6">
                  <p className="text-xs text-yellow-800">⚠️ Это грубый расчёт. Точная стоимость зависит от состояния помещения, сложности работ и выбора материалов.</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg mb-6 text-center"><p className="text-gray-600">Выберите услуги для расчёта</p></div>
            )}
            <a href="https://t.me/ndemidov_portfolio" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 bg-primary text-white font-bold rounded-md text-center hover:opacity-90">Уточнить точную цену</a>
          </div>
        </div>
      </div>
    </section>
  )
}
