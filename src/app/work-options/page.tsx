import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WorkOptions from '@/components/sections/work-options';

export default function WorkOptionsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <WorkOptions />
      </main>
      <Footer />
    </div>
  );
}
