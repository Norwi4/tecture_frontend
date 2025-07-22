"use client";

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// This is a client component, so we can't export metadata from it.
// We can either move metadata to page.tsx files or create a separate file for it.
// For now, let's just comment it out. A better solution would be to move it.
/*
export const metadata: Metadata = {
  title: 'Tecture - Разработка цифровых продуктов',
  description: 'Разработка цифровых продуктов для вашего бизнеса. Веб-сервисы, мобильные приложения, UX/UI дизайн.',
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { toast } = useToast();

  useEffect(() => {
    const themeNotificationShown = localStorage.getItem('theme-notification-shown');
    if (!themeNotificationShown) {
      toast({
        title: "Смените тему",
        description: "Вы можете переключить тему сайта в шапке.",
      });
      localStorage.setItem('theme-notification-shown', 'true');
    }
  }, [toast]);

  return (
    <html lang="ru" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Tecture - Разработка цифровых продуктов</title>
        <meta name="description" content="Разработка цифровых продуктов для вашего бизнеса. Веб-сервисы, мобильные приложения, UX/UI дизайн." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
