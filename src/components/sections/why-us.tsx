import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const reasons = [
  {
    icon: "https://static.tildacdn.com/tild3139-6436-4635-b630-356661333837/75ac3eda-da6d-478a-8.png",
    title: "Быстрая реакция",
    description: "Для нас крайне важен каждый клиент и любая его проблема. Мы всегда реагируем в заранее оговоренные сроки.",
  },
  {
    icon: "https://static.tildacdn.com/tild3061-6435-4461-b762-343531343137/9bdd3832-0acd-49a9-a.png",
    title: "Заявленное качество",
    description: "Наш отдел тестирования не выпустит некачественный продукт в эксплуатацию, даже если это не выгодно нашей компании.",
  },
  {
    icon: "https://static.tildacdn.com/tild3232-3739-4531-a336-333661343431/59bc3cda-b1d0-4e0d-a.png",
    title: "Индивидуальный подход",
    description: "Несмотря на кажущуюся общность, мы верим, что задачи каждого клиента индивидуальны.",
  },
  {
    icon: "https://static.tildacdn.com/tild6166-3261-4131-b438-306165353332/d02685b3-33f7-4044-8.png",
    title: "Система скидок",
    description: "Можете сделать аванс? Заключаете долгосрочный контракт? Умеете работать по T&M? Получите скидку.",
  },
  {
    icon: "https://static.tildacdn.com/tild3766-3438-4335-b638-363533313065/4a17db83-6f21-48c1-a.png",
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
                <img src={reason.icon} alt="" className="h-16 w-16" />
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
