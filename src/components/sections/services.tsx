import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, Palette, BrainCircuit, Cloud, Link as LinkIcon } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications with modern technologies.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile App Development",
    description: "Creating intuitive and engaging native and cross-platform mobile apps for iOS and Android.",
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: "UI/UX Design",
    description: "Designing beautiful, user-centric interfaces that provide seamless user experiences.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI Solutions",
    description: "Integrating intelligent AI models to automate processes and unlock new capabilities.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Cloud Services",
    description: "Leveraging cloud platforms for scalable, secure, and reliable infrastructure and services.",
  },
  {
    icon: <LinkIcon className="w-10 h-10 text-primary" />,
    title: "Blockchain Development",
    description: "Developing decentralized applications and smart contracts for the next generation of the web.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a complete suite of services to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
