import Logo from '@/components/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              We build digital products that help businesses grow.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Development</Link></li>
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe for insights and special offers.
              </p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-background" />
                <Button type="submit" variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
