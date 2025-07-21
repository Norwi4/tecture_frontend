import Image from 'next/image';

const steps = [
  {
    number: "1.",
    title: "Исследование и анализ рынка",
    description: "Прежде чем начать создавать прототип, необходимо провести исследование рынка и определить потребности и требования пользователей.",
  },
  {
    number: "2.",
    title: "Сбор требований и спецификаций",
    description: "На основе анализа рынка необходимо определить функциональные возможности и характеристики будущего продукта.",
  },
  {
    number: "3.",
    title: "Создание концепции",
    description: "На основе собранных требований и спецификаций создается концепция будущего продукта.",
  },
  {
    number: "4.",
    title: "Прототипирование",
    description: "На этом этапе создается прототип, который позволяет проверить концепцию на практике.",
  },
  {
    number: "5.",
    title: "Тестирование и итерации",
    description: "После завершения дизайна проводятся тестирования с реальными пользователями. На основе полученных отзывов команда вносит улучшения, чтобы оптимизировать интерфейс и повысить его удобство.",
  },
  {
    number: "6.",
    title: "Улучшение и оптимизация",
    description: "На основе результатов тестирования и обратной связи необходимо улучшить и оптимизировать прототип.",
  },
  {
    number: "7.",
    title: "Запуск на рынок",
    description: "После завершения процесса прототипирования и оптимизации продукт готов к запуску на рынок.",
  }
];

const benefits = [
    {
        title: "Раннее исправление ошибок",
        description: "Выявление и исправление проблем до начала полноценной разработки."
    },
    {
        title: "Улучшение продукта",
        description: "На этом этапе можно внести изменения и улучшения перед запуском на рынок."
    },
    {
        title: "Проверка концепции",
        description: "Прототипирование позволяет протестировать идею на практике."
    },
]

export default function Prototyping() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Прототипи­рование</h1>
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">Прототипирование</span> — это процесс создания прототипа, то есть модели будущего продукта, которая имеет базовые функциональные возможности и внешний вид. Этот процесс является важным этапом в создании новых продуктов, так как позволяет проверить идеи и концепции на практике, а также улучшить их до запуска на рынок.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Прототипирование может быть разным — от простых бумажных макетов до полностью функциональных моделей, которые могут использоваться для тестирования и сбора обратной связи от пользователей. Однако, независимо от того, какой тип прототипа вы выберете, он должен быть создан с учётом следующих этапов:
            </p>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="https://static.tildacdn.com/tild3863-6130-4566-b538-376635383935/Frame_5.png"
              alt="Prototyping Illustration"
              fill
              style={{ objectFit: 'contain' }}
              data-ai-hint="prototyping process"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Этапы работы</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-border/20 pb-8">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1 text-primary text-2xl font-semibold">{step.number}</div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Прототипиро­вание — важный этап в&nbsp;создании новых продуктов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
