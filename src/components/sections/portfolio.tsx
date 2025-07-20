import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "TeaMentor",
    description: "Сервис для повышения уровня Java и Python разработчиков",
    image: "https://static.tildacdn.com/tild6263-3462-4862-b739-303765653431/365cf24d-e921-4f65-9.png",
    hint: "education platform",
  },
  {
    title: "Абрау Дюрсо",
    description: "Разработка 1С решений для винодельческой компании Абрау Дюрсо",
    image: "https://static.tildacdn.com/tild3864-3461-4037-a566-643562313930/Abrau.png",
    hint: "wine production",
  },
  {
    title: "Gureev Pro",
    description: "Дизайн и frontend-разработка сервисов по AI для Gureev Pro",
    image: "https://static.tildacdn.com/tild3064-3463-4764-b939-323338306336/Gureev_Pro.jpg",
    hint: "ai service dashboard",
  },
    {
    title: "LMS платформа",
    description: "Нагрузочное тестирование LMS платформы онлайн-школы",
    image: "https://static.tildacdn.com/tild3164-3037-4563-a465-636134623139/photo.png",
    hint: "online learning",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Проекты</h2>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border/20 overflow-hidden group shadow-lg rounded-3xl">
              <div className="relative w-full h-60 md:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{objectFit: 'cover'}}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
