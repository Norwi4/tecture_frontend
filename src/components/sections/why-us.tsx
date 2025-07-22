import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Zap, Users, Gem } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
    title: "Заявленное качество",
    description: "Наш отдел тестирования не выпустит некачественный продукт в эксплуатацию, даже если это не выгодно нашей компании.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Быстрая реакция",
    description: "Для нас крайне важен каждый клиент и любая его проблема. Мы всегда реагируем в заранее оговоренные сроки.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Индивидуальный подход",
    description: "Несмотря на кажущуюся общность, мы верим, что задачи каждого клиента индивидуальны и требуют уникального подхода.",
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Гибкость взаимодействия",
    description: "Работаем удаленно или на площадке заказчика. В наших или ваших системах. Учет времени и затрат на любой из сторон. Без границ.",
  },
];

export default function WhyUs() {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Почему стоит доверить разработку нам
          </h2>
           <p className="mt-4 text-lg text-muted-foreground">
            Мы сочетаем техническую экспертизу с глубоким пониманием бизнес-целей, чтобы создавать продукты, которые действительно работают.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card shadow-lg text-center p-6 flex flex-col items-center">
              <CardHeader className="p-0 text-center flex flex-col items-center">
                {reason.icon} <CardTitle className="mt-4"> {reason.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base mt-4">
                {reason.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
