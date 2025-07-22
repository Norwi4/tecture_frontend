import { ArrowRight, Bot, Code, Layers, Rocket, Search, Smartphone, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const services = [
  {
    title: "Прототипирование и MVP",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    title: "Разработка проекта или продукта",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "Выделенные команды",
    icon: <Rocket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Разработка мобильных приложений",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
  {
    title: "AI & ML Решения",
    icon: <Bot className="h-8 w-8 text-primary" />,
  },
  {
    title: "Тестирование и QA",
    icon: <TestTube className="h-8 w-8 text-primary" />,
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Наши услуги
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Предоставляем полный спектр услуг для создания цифровых продуктов.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-none shadow-lg p-6">
              <CardHeader className="p-0 flex flex-row items-center gap-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              Показать все услуги <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
