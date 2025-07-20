import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Portfolio from '@/components/sections/portfolio';

export default function PortfolioPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
