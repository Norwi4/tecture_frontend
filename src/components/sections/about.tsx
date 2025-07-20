import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Tecture</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded on the principles of innovation and craftsmanship, Tecture is a collective of passionate developers, designers, and strategists dedicated to building the future of technology. We believe in collaboration, transparency, and a relentless pursuit of quality.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our culture is built on continuous learning and mutual respect. We thrive on complex challenges and are committed to delivering solutions that not only meet but exceed client expectations, creating tangible value and lasting impact.
            </p>
            <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="#contact">Meet the Team</Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Tecture team working collaboratively"
              fill
              style={{objectFit: 'cover'}}
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
