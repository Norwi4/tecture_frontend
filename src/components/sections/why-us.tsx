import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const reasons = [
  {
    icon: "https://placehold.co/64x64.png",
    hint: "fast response",
    title: "Быстрая реакция",
    description: "Для нас крайне важен каждый клиент и любая его проблема. Мы всегда реагируем в заранее оговоренные сроки.",
  },
  {
    icon: "https://placehold.co/64x64.png",
    hint: "quality check",
    title: "Заявленное качество",
    description: "Наш отдел тестирования не выпустит некачественный продукт в эксплуатацию, даже если это не выгодно нашей компании.",
  },
  {
    icon: "https://placehold.co/64x64.png",
    hint: "individual approach",
    title: "Индивидуальный подход",
    description: "Несмотря на кажущуюся общность, мы верим, что задачи каждого клиента индивидуальны.",
  },
  {
    icon: "https://placehold.co/64x64.png",
    hint: "discount system",
    title: "Система скидок",
    description: "Можете сделать аванс? Заключаете долгосрочный контракт? Умеете работать по T&M? Получите скидку.",
  },
  {
    icon: "https://placehold.co/64x64.png",
    hint: "flexible interaction",
    title: "Гибкость взаимодействия",
    description: "Удаленно или на площадке заказчика. В наших системах или системах клиента. Учет времени и затрат на любой из сторон. Без границ.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
          Почему стоит доверить <br />разработку нам
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img src={reason.icon} alt="" className="h-16 w-16" data-ai-hint={reason.hint} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
