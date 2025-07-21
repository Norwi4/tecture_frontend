import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TeaMentor",
    description: "Сервис для повышения уровня Java и Python разработчиков",
    image: "https://placehold.co/600x400.png",
    hint: "education platform",
  },
  {
    title: "Абрау Дюрсо",
    description: "Разработка 1С решений для винодельческой компании Абрау Дюрсо",
    image: "https://placehold.co/600x400.png",
    hint: "wine production",
  },
  {
    title: "Gureev Pro",
    description: "Дизайн и frontend-разработка сервисов по AI для Gureev Pro",
    image: "https://placehold.co/600x400.png",
    hint: "ai service",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Наши Проекты</h2>
           <Button asChild variant="link" className="hidden md:flex">
             <Link href="/portfolio">Смотреть все проекты <ArrowRight className="ml-2" /></Link>
           </Button>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card overflow-hidden group shadow-lg rounded-lg border-none">
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12 md:hidden">
            <Button asChild variant="outline">
              <Link href="/portfolio">Смотреть все проекты</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
