"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestServices } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: "Please provide a description of at least 20 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function IdeationTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);
    setResult(null);

    const response = await suggestServices(values);

    if (response.success && response.data) {
      setResult(response.data.suggestedServices);
    } else {
      setError(response.error || "An unknown error occurred.");
    }
    setLoading(false);
  }

  return (
    <section id="ideation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg bg-card">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Wand2 className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">AI Project Ideation</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Have an idea? Describe it below and our AI will suggest which of our services are the best fit.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Project Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'An app for local gardeners to trade seeds and plants...'"
                          className="min-h-[120px] bg-secondary/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Get Suggestions"
                  )}
                </Button>
              </form>
            </Form>

            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {result && (
              <div className="mt-6 border-t pt-6">
                <h4 className="font-semibold text-lg mb-2">Suggested Services:</h4>
                <p className="text-muted-foreground whitespace-pre-wrap">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
