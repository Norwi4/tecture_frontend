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
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Свяжитесь с нами</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Готовы обсудить ваш проект? Напишите нам, и мы найдем лучшее решение для ваших задач.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
                <h3 className="font-semibold text-lg mb-2">Электронная почта</h3>
                <a href="mailto:info@umarta.dev" className="text-muted-foreground hover:text-primary transition-colors">info@umarta.dev</a>
            </div>
             <div>
                <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                <a href="https://t.me/umartadev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@umartadev</a>
              </div>
            <div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">Ташкент, Узбекистан</p>
            </div>
          </div>
          <div className="md:col-span-3">
            <Card className="shadow-lg bg-card border-border/20 p-2">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl><Input placeholder="Ваше имя" {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="you@example.com" {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl><Textarea placeholder="Расскажите о вашем проекте..." className="min-h-[120px] bg-background" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full rounded-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>Отправить</Button>
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
