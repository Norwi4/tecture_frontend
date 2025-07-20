import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const techItems = ["Веб-сервисы", "UX/UI Дизайн", "Мобильные приложения", "Брендинг"];

export default function Hero() {
  return (
    <section id="home" className="bg-background pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-6">
          Разработка цифровых продуктов
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Помогаем бизнесу расти и автоматизировать процессы с помощью современных технологических решений.
        </p>
        <div className="flex justify-center mb-10">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="rounded-full px-10 py-6 text-lg">
            <Link href="/contact">Обсудить проект</Link>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techItems.map((item) => (
             <Badge key={item} variant="secondary" className="text-sm font-normal border border-border/30 bg-card/50 py-1.5 px-4">{item}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
