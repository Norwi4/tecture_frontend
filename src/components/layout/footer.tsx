import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tecture. Все права защищены.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Портфолио</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@tecture.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@tecture.dev</a></li>
              <li><a href="https://t.me/tecturedev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Telegram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Есть идея проекта?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Давайте обсудим вашу идею и найдем лучшее решение.
            </p>
            <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="/contact">Обсудить проект</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
