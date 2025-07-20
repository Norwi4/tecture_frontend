import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Tecture delivered a product that exceeded our expectations. Their team is professional, skilled, and incredibly responsive.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait"
  },
  {
    quote: "The entire process, from ideation to launch, was seamless. We're thrilled with the final application and the value it brings to our users.",
    name: "John Smith",
    title: "CTO, Tech Solutions",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait"
  },
  {
    quote: "Working with Tecture felt like a true partnership. They understood our vision and translated it into a beautiful, functional product.",
    name: "Emily White",
    title: "Founder, Creative Co.",
    avatar: "https://placehold.co/100x100.png",
    hint: "person portrait"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're proud to have built long-lasting partnerships.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-6 flex flex-col items-start gap-4 flex-grow">
                      <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 pt-4 mt-auto w-full">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
