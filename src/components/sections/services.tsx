import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

const services = [
  {
    title: "Прототипирование",
    description: "Создание прототипа, с целью проверки гипотезы и выбора варианта реализации",
    icon: "https://placehold.co/64x64.png",
    hint: "prototyping wireframe",
    link: "/prototyping",
  },
  {
    title: "MVP",
    description: "Минимально жизнеспособный продукт, содержащий базовый функционал",
    icon: "https://placehold.co/64x64.png",
    hint: "startup rocket",
    link: "/mvp",
  },
  {
    title: "Разработка проекта или продукта",
    description: "Разработка ПО под конкретные задачи бизнеса",
    icon: "https://placehold.co/64x64.png",
    hint: "product development",
    link: "#",
  },
  {
    title: "Выделенные команды",
    description: "Формируем команду или предоставим отдельных специалистов, под задачи заказчика",
    icon: "https://placehold.co/64x64.png",
    hint: "team collaboration",
    link: "#",
  },
  {
    title: "Модернизация устаревших систем",
    description: "Обновление ПО, перенос системы и данных в облако, добавление мобильных приложений и др.",
    icon: "https://placehold.co/64x64.png",
    hint: "system update",
    link: "#",
  },
  {
    title: "Разработка мобильных приложений",
    description: "Разработка мобильных приложений для Android, iPhone, Аврора",
    icon: "https://placehold.co/64x64.png",
    hint: "mobile development",
    link: "#",
  },
  {
    title: "Бизнес-анализ",
    description: "Определение целей и задач проекта, а также потребности пользователей",
    icon: "https://placehold.co/64x64.png",
    hint: "business analysis",
    link: "#",
  },
  {
    title: "Тестирование",
    description: "Проведение проверки и оценки качества, производительности, удобства продукта",
    icon: "https://placehold.co/64x64.png",
    hint: "software testing",
    link: "#",
  },
  {
    title: "Дизайн",
    description: "Разработка оформления и функциональности продукта",
    icon: "https://placehold.co/64x64.png",
    hint: "ui ux design",
    link: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Услуги</h1>
                 <p className="text-lg text-muted-foreground">
                    Разберемся в вашей бизнес потребности и разработаем программное обеспечение с нуля и до ввода в эксплуатацию. Предоставим полный пакет услуг по созданию программного обеспечения.
                 </p>
            </div>
            <div className="relative h-80 w-full hidden md:block">
                <Image
                    src="https://placehold.co/500x320.png"
                    alt="Services Illustration"
                    fill
                    style={{objectFit: 'contain'}}
                    data-ai-hint="software development"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/20 group hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-shrink-0">
                  <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold mb-2 pr-4">{service.title}</h3>
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={64}
                            height={64}
                            style={{objectFit: 'contain'}}
                            data-ai-hint={service.hint}
                         />
                      </div>
                  </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={service.link} className="text-primary font-semibold flex items-center group-hover:text-accent transition-colors">
                  Перейти <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
