import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="bg-background pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-6">
              Разработка программного обеспечения
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-10">
              Наша цель - создание надежных эффективных продуктов для роста Вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="rounded-full px-10 py-6 text-lg">
                <Link href="/contact">Написать нам</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-[450px] w-full">
            <Image
              src="https://static.tildacdn.com/tild3030-3034-4732-b661-316532393765/Image_shapka.png"
              alt="Software Development"
              fill
              style={{objectFit: 'contain'}}
              data-ai-hint="software development illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
