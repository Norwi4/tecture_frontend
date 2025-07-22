
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Factory, Wind, Building, BarChart, HardDrive, Zap, Wrench } from 'lucide-react';
import Image from "next/image";

const services = [
  {
    title: "Автоматизация котельных",
    description: "Разработка и внедрение систем автоматического управления для котельных, обеспечивающих оптимальный режим работы, экономию топлива и безопасность.",
    icon: <Factory className="h-8 w-8 text-primary" />,
  },
  {
    title: "Автоматизация вентиляции",
    description: "Создание интеллектуальных систем управления вентиляцией и кондиционированием для поддержания комфортного микроклимата и снижения энергопотребления.",
    icon: <Wind className="h-8 w-8 text-primary" />,
  },
  {
    title: "Автоматизация управления зданием (BMS)",
    description: "Комплексные решения для интеграции и централизованного управления всеми инженерными системами здания: отопление, вентиляция, освещение, безопасность.",
    icon: <Building className="h-8 w-8 text-primary" />,
  },
  {
    title: "Система мониторинга энергоресурсов",
    description: "Внедрение систем для сбора, анализа и визуализации данных о потреблении электричества, газа и воды для оптимизации расходов и повышения энергоэффективности.",
    icon: <BarChart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Автоматизация печей полимеризации",
    description: "Решения для точного контроля температуры и времени в покрасочных камерах, гарантирующие высокое качество покрытия и повторяемость результатов.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
  },
];

export default function IndustrialAutomationPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Инженерная и промышленная автоматизация</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Проектируем, внедряем и поддерживаем надежные системы автоматизации для оптимизации производственных и инженерных процессов.
                    </p>
                    </div>
                    <div className="relative h-80 w-full">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Industrial Automation"
                            fill
                            className="object-contain"
                            data-ai-hint="industrial automation robot arm"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section id="services" className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b border-border/50 bg-card rounded-xl mb-4 px-6 shadow-md">
                    <AccordionTrigger className="py-6 hover:no-underline">
                        <div className="flex items-center gap-4">
                        {service.icon}
                        <span className="text-xl font-semibold text-left">{service.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-muted-foreground">
                        {service.description}
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
