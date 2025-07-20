import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
