import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import IdeationTool from '@/components/sections/ideation-tool';

export default function IdeationPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <IdeationTool />
      </main>
      <Footer />
    </div>
  );
}
