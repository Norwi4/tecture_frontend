import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Career from '@/components/sections/career';

export default function CareerPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Career />
      </main>
      <Footer />
    </div>
  );
}
