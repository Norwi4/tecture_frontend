import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import About from '@/components/sections/about';

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
