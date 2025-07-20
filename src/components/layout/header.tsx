"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/services', label: 'Услуги' },
  { href: '/work-options', label: 'Как мы работаем' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/about', label: 'О нас' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm border-b border-border/20' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="rounded-full">
            <Link href="/contact">Связаться</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/20">
          <nav className="flex flex-col items-center gap-6 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Связаться</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
