import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mediapark",
    description: "Разработали крупнейший интернет-магазин в Узбекистане.",
    image: "https://placehold.co/600x400.png",
    hint: "ecommerce website",
    tags: ["интернет-магазин"],
  },
  {
    title: "Korzinka",
    description: "Разработали B2B-платформу для крупнейшей розничной сети.",
    image: "https://placehold.co/600x400.png",
    hint: "b2b platform",
    tags: ["b2b-платформа"],
  },
  {
    title: "Modme",
    description: "Разработали CRM-систему для управления учебным центром.",
    image: "https://placehold.co/600x400.png",
    hint: "crm dashboard",
    tags: ["crm-система"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Портфолио</h2>
           <Button asChild variant="link" className="text-primary hidden md:flex">
             <Link href="/portfolio">
               Все проекты <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border/20 overflow-hidden group">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="border border-border/30 bg-card/80">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12 md:hidden">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/portfolio">
                Все проекты
              </Link>
            </Button>
         </div>
      </div>
    </section>
  );
}
