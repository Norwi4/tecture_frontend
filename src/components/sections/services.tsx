import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

const services = [
  {
    title: "Прототипирование",
    description: "Создание прототипа, с целью проверки гипотезы и выбора варианта реализации",
    icon: "https://static.tildacdn.com/tild6436-3439-4665-b631-313366346462/fbc92aef-777e-49a1-8.png",
    hint: "prototyping wireframe",
    link: "/prototyping",
  },
  {
    title: "MVP",
    description: "Минимально жизнеспособный продукт, содержащий базовый функционал",
    icon: "https://static.tildacdn.com/tild3130-3637-4839-b138-643937363965/9fd3d03c-a2a4-411c-8.png",
    hint: "startup rocket",
    link: "/mvp",
  },
  {
    title: "Разработка проекта или продукта",
    description: "Разработка ПО под конкретные задачи бизнеса",
    icon: "https://static.tildacdn.com/tild3266-3436-4562-b261-646637626234/4da885f5-b2e2-4ec1-8.png",
    hint: "product development",
    link: "#",
  },
  {
    title: "Выделенные команды",
    description: "Формируем команду или предоставим отдельных специалистов, под задачи заказчика",
    icon: "https://static.tildacdn.com/tild6165-6432-4435-b665-623830363033/df685386-45fc-4c01-8.png",
    hint: "team collaboration",
    link: "#",
  },
  {
    title: "Модернизация устаревших систем",
    description: "Обновление ПО, перенос системы и данных в облако, добавление мобильных приложений и др.",
    icon: "https://static.tildacdn.com/tild3064-3136-4836-b162-393430633337/15514a89-047a-4341-b.png",
    hint: "system update",
    link: "#",
  },
  {
    title: "Разработка мобильных приложений",
    description: "Разработка мобильных приложений для Android, iPhone, Аврора",
    icon: "https://static.tildacdn.com/tild6361-6466-4663-a662-346365623034/bdadb771-b402-453d-a.png",
    hint: "mobile development",
    link: "#",
  },
  {
    title: "Бизнес-анализ",
    description: "Определение целей и задач проекта, а также потребности пользователей",
    icon: "https://static.tildacdn.com/tild6139-3637-4963-b332-343863633433/d4fadd29-d65c-4836-b.png",
    hint: "business analysis",
    link: "#",
  },
  {
    title: "Тестирование",
    description: "Проведение проверки и оценки качества, производительности, удобства продукта",
    icon: "https://static.tildacdn.com/tild6431-6232-4836-b761-346465633162/74dfae3b-2423-472c-a.png",
    hint: "software testing",
    link: "#",
  },
  {
    title: "Дизайн",
    description: "Разработка оформления и функциональности продукта",
    icon: "https://static.tildacdn.com/tild3233-6664-4566-b632-313231343966/809ad367-b1c5-49b2-8.png",
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
                    src="https://static.tildacdn.com/tild3462-6430-4761-b332-646332333933/Project.svg"
                    alt="Services Illustration"
                    fill
                    style={{objectFit: 'contain'}}
                    data-ai-hint="software development illustration"
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
