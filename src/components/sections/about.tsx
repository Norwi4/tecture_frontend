import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">О нас</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Мы команда экспертов, увлеченных созданием цифровых продуктов, которые решают реальные проблемы и приносят пользу бизнесу.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
             <Image
              src="https://placehold.co/800x600.png"
              alt="Команда Umarta"
              fill
              style={{objectFit: 'cover'}}
              data-ai-hint="team meeting office"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Наша миссия</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Мы стремимся помогать компаниям достигать своих целей через технологии. Наш подход основан на глубоком понимании бизнес-процессов клиента, прозрачности и партнерских отношениях.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Каждый проект для нас — это возможность создать что-то уникальное и ценное. Мы гордимся тем, что наши решения помогают клиентам расти, оптимизировать работу и выходить на новые рынки.
            </p>
            <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="rounded-full">
              <Link href="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
