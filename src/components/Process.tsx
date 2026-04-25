const STEPS = [
  { id: 1, title: 'Заявка и согласование', description: 'Пишете в Telegram, отвечаем на вопросы, согласовываем время замера', icon: '📞' },
  { id: 2, title: 'Выезд и замер', description: 'Главный мастер осмотрит объект, проверит состояние', icon: '📏' },
  { id: 3, title: 'Смета и договор', description: 'Подробная смета, график работ, официальный договор', icon: '📋' },
  { id: 4, title: 'Выполнение и сдача', description: 'Фото-отчёты, промежуточные проверки, финальная сдача', icon: '✅' },
]

export default function Process() {
  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-dark mb-12 text-center">Как мы работаем</h2>
        <div className="hidden md:block">
          <div className="flex items-stretch gap-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex-1 flex flex-col">
                <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent border-2 border-primary rounded-lg flex-1">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="text-lg font-bold text-dark mb-2">{step.id}. {step.title}</div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && <div className="flex justify-center -mx-2 my-4"><div className="text-2xl text-primary">→</div></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden space-y-4">
          {STEPS.map((step) => (
            <div key={step.id} className="p-6 bg-white border-2 border-dark rounded-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-4xl">{step.icon}</div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-dark mb-2">{step.id}. {step.title}</div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
