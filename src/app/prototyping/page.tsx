import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Prototyping from '@/components/sections/prototyping';

export default function PrototypingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Prototyping />
      </main>
      <Footer />
    </div>
  );
}
