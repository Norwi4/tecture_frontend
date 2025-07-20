import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const services = [
  {
    title: "Веб-сервисы",
    description: "Разрабатываем и запускаем масштабируемые и отказоустойчивые веб-сервисы, которые решают задачи вашего бизнеса. Создаем сложные системы, API, личные кабинеты и корпоративные порталы.",
  },
  {
    title: "UX/UI Дизайн",
    description: "Проектируем и создаем удобные и современные интерфейсы для пользователей. Проводим исследования, создаем прототипы и тестируем их, чтобы ваш продукт был не только красивым, но и функциональным.",
  },
  {
    title: "Мобильные приложения",
    description: "Создаем нативные и кроссплатформенные приложения для iOS и Android. Разрабатываем приложения с нуля, а также дорабатываем и поддерживаем существующие.",
  },
  {
    title: "Брендинг",
    description: "Помогаем создать уникальный бренд и выделиться на рынке. Разрабатываем логотипы, фирменный стиль, брендбуки и другие элементы, которые помогут вашему бренду стать узнаваемым.",
  },
  {
    title: "IT-консалтинг",
    description: "Предоставляем экспертные консультации для оптимизации ваших IT-процессов, выбора технологического стека и построения эффективной IT-инфраструктуры.",
  },
  {
    title: "Поддержка",
    description: "Обеспечиваем надежную поддержку и развитие ваших продуктов после запуска. Мониторим работоспособность, исправляем ошибки и внедряем новые функции.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card/50 border-y border-border/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Услуги</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Мы предлагаем полный цикл разработки цифровых продуктов — от идеи и проектирования до запуска и поддержки.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-transparent border-0 shadow-none p-0 group">
              <Link href="/services">
                <CardContent className="p-6 border border-border/20 rounded-lg h-full flex flex-col hover:bg-card transition-colors">
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
