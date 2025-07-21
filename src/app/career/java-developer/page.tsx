import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Vacancy from '@/components/sections/vacancy';

const vacancyDetails = {
    title: "Java разработчик",
    tasks: [
        "Разработка и поддержка высоконагруженных серверных приложений на Java.",
        "Проектирование и реализация архитектуры микросервисов.",
        "Интеграция со сторонними сервисами и API.",
        "Оптимизация производительности и рефакторинг кода.",
        "Участие в код-ревью и командной работе."
    ],
    requirements: [
        "Опыт коммерческой разработки на Java от 3 лет.",
        "Глубокие знания Spring Framework (Core, Boot, MVC, Data).",
        "Опыт работы с реляционными и нереляционными базами данных (PostgreSQL, MongoDB).",
        "Понимание принципов микросервисной архитектуры.",
        "Опыт работы с Docker, Kubernetes."
    ],
    offer: [
        "Конкурентная заработная плата и система бонусов.",
        "Гибкий график и возможность удаленной работы.",
        "ДМС со стоматологией.",
        "Компенсация затрат на обучение и профессиональное развитие.",
        "Современное оборудование и комфортный офис."
    ]
}

export default function JavaDeveloperPage() {
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
