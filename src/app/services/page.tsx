
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Factory } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
    {
        title: "Разработка цифровых продуктов",
        description: "Создаем веб-сервисы, мобильные приложения, AI-решения и предоставляем выделенные команды для вашего бизнеса.",
        icon: <Cpu className="h-12 w-12 text-primary" />,
        href: "/services/software-development"
    },
    {
        title: "Инженерная и промышленная автоматизация",
        description: "Проектируем и внедряем системы автоматизации для котельных, вентиляции, зданий (BMS) и производственных линий.",
        icon: <Factory className="h-12 w-12 text-primary" />,
        href: "/services/industrial-automation"
    }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
         <section className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Наши Услуги</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Мы предлагаем комплексные решения в двух ключевых областях: создание современных цифровых продуктов и внедрение передовых систем промышленной автоматизации.
                    </p>
                </div>
            </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {serviceCategories.map((category) => (
                        <Link href={category.href} key={category.title} className="group block">
                            <Card className="bg-card h-full shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <CardHeader className="items-center text-center">
                                    {category.icon}
                                    <CardTitle className="mt-4 text-2xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground mb-6">{category.description}</p>
                                    <Button variant="link" className="text-primary">
                                        Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
