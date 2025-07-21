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
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов."),
  email: z.string().email("Пожалуйста, введите действительный адрес электронной почты."),
  message: z.string().min(10, "Сообщение должно содержать не менее 10 символов."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за ваше обращение. Мы скоро с вами свяжемся.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Свяжитесь с нами</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Готовы обсудить ваш проект? Напишите нам, и мы найдем лучшее решение для ваших задач.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Электронная почта</h3>
                <a href="mailto:info@tecture.dev" className="text-muted-foreground hover:text-primary transition-colors">info@tecture.dev</a>
              </div>
            </div>
             <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4"></path></svg>
               </div>
               <div>
                 <h3 className="font-semibold text-lg">Telegram</h3>
                <a href="https://t.me/tecturedev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@tecturedev</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Адрес</h3>
                <p className="text-muted-foreground">Ташкент, Узбекистан</p>
              </div>
            </div>
          </div>
          <div>
            <Card className="bg-card shadow-xl p-2 border-none">
              <CardContent className="p-6">
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
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl><Textarea placeholder="Расскажите о вашем проекте..." className="min-h-[120px]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full">Отправить сообщение</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
