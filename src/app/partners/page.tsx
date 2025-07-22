import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Partners from '@/components/sections/partners';

export default function PartnersPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
