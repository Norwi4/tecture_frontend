import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Code, Layers, Rocket, Smartphone, Bot, TestTube, Search } from 'lucide-react';

const services = [
  {
    title: "Прототипирование и MVP",
    description: "Создание прототипа для проверки гипотезы, разработка минимально жизнеспособного продукта (MVP) для быстрого запуска на рынок и сбора обратной связи.",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    title: "Разработка проекта или продукта",
    description: "Полный цикл разработки программного обеспечения под конкретные задачи вашего бизнеса, от идеи до ввода в эксплуатацию и поддержки.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "Выделенные команды",
    description: "Формирование команды специалистов или предоставление отдельных экспертов (аутстаффинг) под ваши задачи и проекты.",
    icon: <Rocket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Разработка мобильных приложений",
    description: "Создание нативных и кроссплатформенных мобильных приложений для Android, iOS и других платформ.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
  {
    title: "AI & ML Решения",
    description: "Интеграция искусственного интеллекта и машинного обучения для автоматизации процессов, анализа данных и создания интеллектуальных систем.",
    icon: <Bot className="h-8 w-8 text-primary" />,
  },
  {
    title: "Тестирование и QA",
    description: "Проведение ручного и автоматизированного тестирования для обеспечения качества, производительности и удобства использования вашего продукта.",
    icon: <TestTube className="h-8 w-8 text-primary" />,
  },
  {
    title: "Бизнес-анализ и консалтинг",
    description: "Глубокий анализ бизнес-процессов, определение целей проекта, выявление потребностей пользователей и формирование технических требований.",
    icon: <Search className="h-8 w-8 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Наши Услуги</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Мы предоставляем полный спектр услуг по созданию, запуску и поддержке цифровых продуктов любого уровня сложности.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="py-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <span className="text-xl font-semibold">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
