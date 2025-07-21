import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Target, BarChart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
             <Image
              src="https://placehold.co/600x500.png"
              alt="Команда Tecture"
              fill
              className="object-cover"
              data-ai-hint="modern office"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">О Компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы — команда экспертов, увлеченных созданием цифровых продуктов, которые решают реальные бизнес-задачи и приносят измеримую пользу.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Наша миссия</h3>
                        <p className="text-muted-foreground">Помогать компаниям достигать своих целей через технологии, основанные на глубоком понимании бизнес-процессов.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Наш подход</h3>
                        <p className="text-muted-foreground">Мы строим прозрачные и партнерские отношения. Каждый проект для нас — это возможность создать что-то уникальное и ценное.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Наши результаты</h3>
                        <p className="text-muted-foreground">Мы гордимся тем, что наши решения помогают клиентам расти, оптимизировать работу и выходить на новые рынки.</p>
                    </div>
                </div>
            </div>

            <Button asChild size="lg" className="mt-10">
              <Link href="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
