"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";

const partners = [
  {
    name: "Innovate Solutions",
    description: "Ведущий поставщик облачных решений и корпоративного программного обеспечения.",
    logo: "https://placehold.co/100x100.png",
    logoHint: "tech company logo",
  },
  {
    name: "QuantumLeap AI",
    description: "Специализируются на разработке передовых моделей машинного обучения и искусственного интеллекта.",
    logo: "https://placehold.co/100x100.png",
    logoHint: "ai startup logo",
  },
  {
    name: "CyberGuardians",
    description: "Эксперты в области кибербезопасности, предлагающие комплексную защиту для бизнеса.",
    logo: "https://placehold.co/100x100.png",
    logoHint: "security logo",
  },
  {
    name: "DataWeavers",
    description: "Помогают компаниям превращать необработанные данные в ценные бизнес-инсайты.",
    logo: "https://placehold.co/100x100.png",
    logoHint: "data analytics logo",
  },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Поле должно содержать не менее 2 символов."),
  companyName: z.string().min(2, "Поле должно содержать не менее 2 символов."),
  email: z.string().email("Пожалуйста, введите действительный адрес электронной почты."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Partners() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", companyName: "", email: "" },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Заявка отправлена!",
      description: "Спасибо за ваш интерес! Мы скоро с вами свяжемся.",
    });
    // Тут можно закрыть диалоговое окно, если оно не закрывается автоматически
  }

  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Партнеры</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Мы верим в силу сотрудничества и строим долгосрочные отношения с нашими партнерами для достижения общих целей.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Стать партнером</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Стать партнером</DialogTitle>
                  <DialogDescription>
                    Заполните форму ниже, и мы свяжемся с вами для обсуждения возможностей сотрудничества.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>ФИО</FormLabel>
                        <FormControl><Input placeholder="Иванов Иван Иванович" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="companyName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Название компании</FormLabel>
                        <FormControl><Input placeholder="ООО 'Инновации'" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="partner@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full mt-4">Отправить</Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Partnership illustration"
              fill
              className="object-contain"
              data-ai-hint="business partnership handshake"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">Наши уважаемые партнеры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="bg-card text-center p-6 shadow-lg rounded-xl">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                   <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-cover"
                      data-ai-hint={partner.logoHint}
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-muted-foreground text-sm">{partner.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
