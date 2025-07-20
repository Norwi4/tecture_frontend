import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
