import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Mvp from '@/components/sections/mvp';

export default function MvpPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Mvp />
      </main>
      <Footer />
    </div>
  );
}
