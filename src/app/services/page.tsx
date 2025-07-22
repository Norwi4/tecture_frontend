import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Cpu, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const serviceCategories = [
    {
        title: "Разработка цифровых продуктов",
        description: "Создаем веб-сервисы, мобильные приложения, AI-решения и предоставляем выделенные команды для вашего бизнеса.",
        icon: <Cpu className="h-12 w-12 text-primary" />,
        href: "/services/software-development",
        image: "https://placehold.co/600x400.png",
        imageHint: "software development team",
    },
    {
        title: "Инженерная и промышленная автоматизация",
        description: "Проектируем и внедряем системы автоматизации для котельных, вентиляции, зданий (BMS) и производственных линий.",
        icon: <Factory className="h-12 w-12 text-primary" />,
        href: "/services/industrial-automation",
        image: "https://placehold.co/600x400.png",
        imageHint: "industrial automation factory",
    }
]

export default function ServicesPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-background">
                    <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Наши услуги</h1>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Мы предлагаем комплексные решения в двух ключевых областях: создание современных цифровых продуктов и внедрение передовых систем промышленной автоматизации.
                                </p>
                            </div>
                            <div className="relative h-80 w-full">
                                <Image
                                    src="https://placehold.co/600x400.png"
                                    alt="Services illustration"
                                    fill
                                    className="object-contain"
                                    data-ai-hint="digital services collage"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-secondary py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6 space-y-24">
                        {serviceCategories.map((category, index) => (
                            <div key={category.title} className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={cn("relative h-96 w-full", index % 2 !== 0 && "md:order-last")}>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover rounded-lg shadow-lg"
                                        data-ai-hint={category.imageHint}
                                    />
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <div className="inline-block bg-primary/10 p-4 rounded-full">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight">{category.title}</h2>
                                    <p className="text-lg text-muted-foreground">{category.description}</p>
                                    <Button asChild size="lg">
                                        <Link href={category.href}>
                                            Узнать больше <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}