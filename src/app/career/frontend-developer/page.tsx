import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Vacancy from '@/components/sections/vacancy';

const vacancyDetails = {
    title: "Frontend разработчик",
    tasks: [
        "Разработка пользовательских интерфейсов на React и Next.js.",
        "Верстка адаптивных и кросс-браузерных страниц.",
        "Оптимизация производительности приложений.",
        "Взаимодействие с командой дизайнеров и бэкенд-разработчиков.",
        "Написание чистого, поддерживаемого и тестируемого кода."
    ],
    requirements: [
        "Отличные знания JavaScript (ES6+), TypeScript.",
        "Опыт работы с React, Next.js от 2 лет.",
        "Понимание принципов работы REST API.",
        "Опыт работы с системами контроля версий (Git).",
        "Умение работать в команде и нацеленность на результат."
    ],
    offer: [
        "Конкурентная заработная плата по результатам собеседования.",
        "Возможность работать удаленно или в комфортном офисе.",
        "Профессиональный рост, оплата курсов и конференций.",
        "Интересные и сложные проекты.",
        "Дружная и сильная команда."
    ]
}

export default function FrontendDeveloperPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Vacancy {...vacancyDetails} />
      </main>
      <Footer />
    </div>
  );
}
