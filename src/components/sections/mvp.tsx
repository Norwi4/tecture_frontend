import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Contact from './contact';

const reasons = [
    {
        title: "Оценка потенциала на рынке",
        description: "MVP позволяет оценить потенциал продукта на рынке и определить, как он будет воспринят потенциальными клиентами. Это помогает снизить риски на ранних стадиях разработки и сделать более обоснованный выбор в пользу продолжения или прекращения разработки продукта.",
    },
    {
        title: "Получение обратной связи",
        description: "Создание MVP позволяет улучшать продукт на основе обратной связи от пользователей и опыта использования продукта. Это помогает создавать продукт, который будет более эффективным и удобным для пользователей, что повышает вероятность успеха на рынке.",
    },
    {
        title: "Снижение затрат на разработку",
        description: "Создание MVP позволяет снизить затраты на разработку, тестирование и маркетинг продукта, так как не требуется полная разработка продукта. Это помогает сэкономить время и деньги на ранних стадиях разработки.",
    }
];

const implementationSteps = [
    {
        number: "1.",
        title: "Определение метрик и исследование рынка",
        description: "Прежде чем начать создавать прототип, необходимо провести исследование рынка и определить потребности и требования пользователей.",
    },
    {
        number: "2.",
        title: "Изучение конкурентов",
        description: "Анализирует действия конкурентов, их продукты и стратегии, чтобы выявить сильные и слабые стороны. Это позволяет понять, что уже существует на рынке, и определить уникальные особенности своего продукта.",
    },
    {
        number: "3.",
        title: "Анализ собственного продукта",
        description: "Проводим SWOT-анализ на основе исследования сильных и слабых сторон продукта, а также их возможностей и угроз.",
    },
    {
        number: "4.",
        title: "Определение целевой аудитории и проведение CustDev",
        description: "Изучения потребностей и предпочтений потенциальных клиентов с помощью различные методов, таких как опросы, интервью и фокус-группы, чтобы получить обратную связь от представителей целевой аудитории. Это помогает уточнить требования к продукту и понять, как он может быть улучшен.",
    },
    {
        number: "5.",
        title: "Выбор подходящего типа MVP",
        description: "Выбирает наиболее подходящий тип MVP, который наилучшим образом отражает основные функции и ценности продукта. Выбор зависит от целей проекта, ресурсов и доступных технологий.",
    },
    {
        number: "6.",
        title: "Проведение тестирования и запуск",
        description: "Тестирум MVP с участием представителей целевой аудитории для получения обратной связи и выявления возможных проблем. После успешного тестирования MVP запускается на рынок для сбора реальных данных и проверки гипотез.",
    },
    {
        number: "7.",
        title: "Сбор результатов и обратной связи",
        description: "Оцениваем эффективность продукта, выявляем его сильные и слабые стороны, а также определяем дальнейшие шаги по развитию продукта.",
    }
];

export default function Mvp() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">MVP</h1>
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">MVP (англ. Minimum Viable Product)</span> - это минимально работоспособный продукт, который содержит только необходимые функции для удовлетворения потребностей и ожиданий пользователей. MVP используется для быстрого запуска на рынок и получения обратной связи от пользователей, что позволяет улучшить и доработать продукт в дальнейшем. MVP также помогает снизить риски и затраты на разработку, тестирование и маркетинг продукта.
            </p>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="https://static.tildacdn.com/tild6463-6230-4831-a364-636366643933/svg.svg"
              alt="MVP Illustration"
              fill
              style={{ objectFit: 'contain' }}
              data-ai-hint="startup launch rocket"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Зачем бизнесу MVP?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground text-lg">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Этапы внедрения</h2>
        <div className="space-y-8">
          {implementationSteps.map((step, index) => (
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

      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Разница между MVP и&nbsp;прототипом</h2>
         </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border/20 p-6 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Прототип</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Это модель или образец продукта, который создается для того, чтобы проверить концепцию и дизайн продукта. Он может быть создан на любой стадии разработки продукта и не обязательно должен работать. Прототип колеса может представлять собой грубую модель из картона или пластика, которая показывает форму и размер колеса.</p>
               <p className="text-primary font-semibold mt-4">Отвечает на вопрос: «Будет ли это работать?»</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/20 p-6 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">MVP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Это минимально жизнеспособный продукт, который содержит минимальный набор функций, необходимых для того, чтобы продукт мог быть запущен на рынок и протестирован реальными пользователями. Он должен работать и иметь базовый функционал, который позволяет потенциальным клиентам использовать продукт. MVP колеса может быть простым металлическим диском с отверстиями для крепления, который позволяет проверить основную функцию колеса — вращение.</p>
                <p className="text-primary font-semibold mt-4">Отвечает на вопрос: «Нужно ли это кому-нибудь?»</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Contact />
    </div>
  );
}
