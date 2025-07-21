import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative bg-background pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-6">
              Разработка программного обеспечения
            </h1>
            <p className="max-w-lg mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-10">
              Наша цель - создание надежных и эффективных продуктов для роста Вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="px-10 py-6 text-lg">
                <Link href="/contact">Начать проект</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-10 py-6 text-lg">
                <Link href="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] w-full">
            <Image
              src="https://placehold.co/700x500.png"
              alt="Software Development"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="abstract technology"
            />
             <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
             <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
