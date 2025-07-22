
import { ArrowRight, Bot, Code, Layers, Rocket, Smartphone, TestTube, Search, Wind, Factory, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const services = [
  {
    title: "Разработка веб-сервисов",
    icon: <Code className="h-8 w-8 text-primary" />,
    href: "/services/software-development"
  },
  {
    title: "Разработка мобильных приложений",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    href: "/services/software-development"
  },
  {
    title: "AI & ML Решения",
    icon: <Bot className="h-8 w-8 text-primary" />,
    href: "/services/software-development"
  },
  {
    title: "Автоматизация котельных",
    icon: <Factory className="h-8 w-8 text-primary" />,
    href: "/services/industrial-automation"
  },
  {
    title: "Автоматизация вентиляции",
    icon: <Wind className="h-8 w-8 text-primary" />,
    href: "/services/industrial-automation"
  },
  {
    title: "BMS и мониторинг",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    href: "/services/industrial-automation"
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
            Предоставляем полный спектр услуг для создания цифровых продуктов и автоматизации промышленных систем.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
             <Link href={service.href} key={service.title} className="group">
                <Card className="bg-card border-none shadow-lg p-6 h-full group-hover:scale-105 transition-transform duration-300">
                  <CardHeader className="p-0 flex flex-row items-center gap-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </CardHeader>
                </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/services">
              Показать все услуги <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
