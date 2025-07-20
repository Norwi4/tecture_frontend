import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="bg-secondary/30 pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
          Crafting Digital Excellence
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          We transform your ideas into powerful, high-performance digital solutions. From sleek web apps to robust AI systems, we are your partners in innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-card">
            <Link href="/portfolio">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
