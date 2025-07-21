"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов."),
  email: z.string().email("Пожалуйста, введите действительный адрес электронной почты."),
  comment: z.string().optional(),
  resume: z.any().refine(file => file?.length > 0, 'Резюме обязательно.'),
});

type FormValues = z.infer<typeof formSchema>;

interface VacancyProps {
    title: string;
    tasks: string[];
    requirements: string[];
    offer: string[];
}

export default function Vacancy({ title, tasks, requirements, offer }: VacancyProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", comment: "" },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Резюме отправлено!",
      description: "Спасибо за ваш отклик. Мы скоро с вами свяжемся.",
    });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground">
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="prose prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">{title}</h1>
                    
                    <h2 className="text-3xl font-bold mt-8 mb-4">Задачи</h2>
                    <ul className="space-y-2">
                        {tasks.map((task, i) => (
                           <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <span>{task}</span>
                           </li>
                        ))}
                    </ul>

                     <h2 className="text-3xl font-bold mt-8 mb-4">Требования</h2>
                    <ul className="space-y-2">
                        {requirements.map((req, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                               <span>{req}</span>
                           </li>
                        ))}
                    </ul>

                     <h2 className="text-3xl font-bold mt-8 mb-4">Мы предлагаем</h2>
                    <ul className="space-y-2">
                        {offer.map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                               <span>{item}</span>
                           </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Card className="bg-secondary shadow-xl p-2 sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-2xl">Откликнуться на вакансию</CardTitle>
                            <CardDescription>Заполните форму, и мы свяжемся с вами.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Имя</FormLabel>
                                    <FormControl><Input placeholder="Ваше имя" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                                 <FormField control={form.control} name="comment" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Комментарий</FormLabel>
                                    <FormControl><Textarea placeholder="Сопроводительное письмо (по желанию)..." {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                                <FormField control={form.control} name="resume" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Резюме (файл)</FormLabel>
                                    <FormControl>
                                        <Input type="file" {...form.register('resume')} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                                <Button type="submit" className="w-full">Отправить отклик</Button>
                            </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    </div>
  );
}
