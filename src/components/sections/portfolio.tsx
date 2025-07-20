import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A scalable online marketplace with advanced inventory management and a seamless checkout experience.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A business intelligence tool that uses machine learning to provide actionable insights from complex data sets.",
    image: "https://placehold.co/600x400.png",
    hint: "data charts",
    tags: ["Python", "TensorFlow", "Next.js"],
  },
  {
    title: "Mobile Health & Fitness App",
    description: "A cross-platform mobile app for tracking workouts, setting fitness goals, and connecting with a community.",
    image: "https://placehold.co/600x400.png",
    hint: "fitness app",
    tags: ["React Native", "Firebase", "GraphQL"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the innovative solutions we've delivered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{objectFit: 'cover'}}
                  className="w-full h-full"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
