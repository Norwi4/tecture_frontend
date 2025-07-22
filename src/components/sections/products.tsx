import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const products = [
  {
    title: "TeaMentor",
    link: "https://teamentor.dev",
    linkText: "teamentor.dev",
    description: "Инновационная платформа для менторинга и повышения квалификации IT-специалистов. Помогает разработчикам расти быстрее благодаря персонализированным планам развития и поддержке опытных наставников.",
    image: "https://placehold.co/600x400.png",
    imageHint: "education platform interface",
  },
  {
    title: "Gureev Pro",
    link: "https://gureev.pro",
    linkText: "gureev.pro",
    description: "Сервис на базе искусственного интеллекта для автоматизации бизнес-процессов. Анализирует данные, генерирует отчеты и помогает принимать взвешенные решения, экономя время и ресурсы компании.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai dashboard analytics",
  },
  {
    title: "Мобильное приложение для Абрау Дюрсо",
    link: "#",
    linkText: "Скоро в App Store и Google Play",
    description: "Корпоративное приложение для сотрудников компании 'Абрау Дюрсо'. Упрощает внутренние коммуникации, автоматизирует рабочие процессы и предоставляет быстрый доступ к необходимой информации.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile application screen",
  }
];

export default function Products() {
  return (
    <div className="bg-background text-foreground">
       <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Продукты</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Готовые решения, которые помогают бизнесу расти, автоматизировать процессы и выходить на новый уровень эффективности.
              </p>
            </div>
             <div className="relative h-80 w-full">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Products illustration"
                    fill
                    className="object-contain"
                    data-ai-hint="innovative products"
                />
            </div>
          </div>
        </section>

      <section className="py-20 md:py-28 bg-secondary">
         <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
            {products.map((product, index) => (
                <div 
                key={product.title} 
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                >
                <div className={cn("relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl", index % 2 === 1 ? 'md:order-last' : '')}>
                    <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                    />
                </div>
                <div className="max-w-md">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{product.title}</h2>
                    <Link 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline mb-4"
                    >
                    {product.linkText}
                    <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                    <p className="text-muted-foreground text-lg">
                    {product.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
}
