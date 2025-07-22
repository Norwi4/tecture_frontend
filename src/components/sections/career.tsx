import { ArrowRight, Briefcase, Heart, Shield } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Забота о сотрудниках",
    description: "Мы создаем рабочую среду, в которой каждый чувствует себя ценным. Мы предлагаем гибкий график, возможности для роста и заботимся о благополучии команды.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Поддержание репутации",
    description: "Наша репутация — это результат качественной работы и честных отношений с клиентами и сотрудниками. Мы гордимся нашими проектами и командой.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Профессиональное развитие",
    description: "Мы инвестируем в обучение и развитие наших специалистов, предоставляя доступ к курсам, конференциям и внутреннему обмену знаниями.",
  },
];

const vacancies = [
    {
        title: "Java разработчик",
        location: "Калуга",
        type: "удаленная",
        href: "/career/java-developer"
    },
    {
        title: "Frontend разработчик",
        location: "Калуга",
        type: "удаленная",
        href: "/career/frontend-developer"
    },
    {
        title: "UI/UX Дизайнер",
        location: "Калуга",
        type: "удаленная",
        href: "/career/ui-ux-designer"
    }
]

export default function Career() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Карьера в Тектуре</h1>
              <p className="text-lg text-muted-foreground">
                Присоединяйтесь к нашей команде профессионалов, чтобы создавать инновационные цифровые продукты и расти вместе с нами.
              </p>
            </div>
            <div className="relative h-80 w-full">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Career illustration"
                    fill
                    className="object-contain"
                    data-ai-hint="team working"
                />
            </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Наши ценности</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Мы строим компанию, в которой хочется работать и развиваться.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card text-center p-8 shadow-lg rounded-xl">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
         <div className="max-w-3xl text-center mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Условия для вашего комфорта</h2>
             <p className="mt-4 text-lg text-muted-foreground">
                Мы предлагаем стабильность, комфортные условия труда и возможности для профессионального роста.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Стабильность и уверенность</h3>
                <p className="text-muted-foreground">Мы предлагаем официальное трудоустройство, конкурентную заработную плату и долгосрочные проекты, которые дают уверенность в завтрашнем дне.</p>
            </div>
             <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Комфортные условия</h3>
                <p className="text-muted-foreground">Современный офис, гибкий график, возможность удаленной работы и дружелюбная атмосфера — все для того, чтобы вы могли сосредоточиться на интересных задачах.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Профессиональное развитие</h3>
                <p className="text-muted-foreground">Мы оплачиваем курсы, конференции и поощряем обмен знаниями внутри команды, чтобы вы могли постоянно совершенствовать свои навыки.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Приятные бонусы</h3>
                <p className="text-muted-foreground">Предлагаем ДМС со стоматологией, компенсацию затрат на спорт и современное оборудование для комфортной работы.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Процессы</h3>
                <p className="text-muted-foreground">Мы используем гибкие методологии разработки и поощряем открытый диалог, чтобы каждый мог влиять на конечный результат.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Атмосфера в коллективе</h3>
                <p className="text-muted-foreground">Мы ценим дружеские отношения, взаимопомощь и неформальное общение. У нас нет строгой иерархии и бюрократии.</p>
            </div>
        </div>
      </section>

      <section id="vacancies" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">Открытые вакансии в компании Тектура</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {vacancies.map((vacancy, index) => (
               <Link href={vacancy.href} key={index} className="block group">
                <Card className="bg-card hover:bg-card/90 transition-all shadow-md hover:shadow-xl border-l-4 border-primary">
                    <CardContent className="p-6 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold">{vacancy.title}</h3>
                            <p className="text-muted-foreground mt-1">
                                {vacancy.title}, {vacancy.location}, {vacancy.type}
                            </p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-2 transition-transform" />
                    </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
