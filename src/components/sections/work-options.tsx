import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WorkOptions() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Варианты работы</h1>
            <p className="text-lg text-muted-foreground">
              Time &amp; Material или Fixed Price — два основных типа контрактов, используемых в заказной разработке программного обеспечения. Выбор между ними зависит от конкретных потребностей проекта и возможностей клиента.
            </p>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="https://placehold.co/600x320.png"
              alt="Work Options Illustration"
              fill
              style={{ objectFit: 'contain' }}
              data-ai-hint="contract agreement"
            />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Выбор выигрышной контрактной стратегии
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          <Card className="border border-border/20 p-8 rounded-2xl shadow-lg text-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold">Time &amp; Material</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">Оплата по заранее оговоренным периодам за фактически потраченные ресурсы.</p>
            </CardContent>
          </Card>
          <Card className="border border-border/20 p-8 rounded-2xl shadow-lg text-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold">Fixed Price</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">Поэтапная оплата за оговоренный результат работ.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
           <div className="md:order-last">
                 <h3 className="text-3xl font-bold tracking-tight mb-6">Fixed Price (Фиксированная цена)</h3>
                 <p className="text-muted-foreground text-lg">
                    Контракт предусматривает фиксированную цену за выполнение определенного объема работ. Это означает, что клиент заранее может сформулировать окончательное задание, знает стоимость проекта и может спланировать свой бюджет. Однако, если в процессе работы возникают дополнительные задачи или изменения требований, то это приводит к дополнительным расходам для исполнителя и поэтому реализуется уже в рамках следующего договора на модернизацию.
                 </p>
            </div>
            <div className="relative h-96 w-full">
                <Image
                    src="https://placehold.co/560x380.png"
                    alt="Fix price"
                    fill
                    className="object-contain"
                    data-ai-hint="planning budget"
                />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
           <div>
                 <h3 className="text-3xl font-bold tracking-tight mb-6">Time &amp; Material (Время и материалы)</h3>
                 <p className="text-muted-foreground text-lg mb-6">
                    Контракт предусматривает оплату за фактически затраченное время или другие использованные на выполнение проекта прямые затраты (например: закупку лицензий). Это позволяет клиенту гибко управлять проектом и вносить изменения в процессе работы. 
                 </p>
                 <p className="text-muted-foreground text-lg">
                   Однако, такой контракт может быть менее прозрачным в плане стоимости. Если клиенту важно зафиксировать бюджет, применяется формат <strong>time &amp; material with cap</strong>. При такой форме сразу оговаривается максимальный бюджет, в рамках которого заказчик и подрядчик совместно выбирают наиболее важные задачи для реализации.
                 </p>
            </div>
            <div className="relative h-96 w-full">
                 <Image
                    src="https://placehold.co/580x380.png"
                    alt="Time and material"
                    fill
                    className="object-contain"
                    data-ai-hint="time management"
                />
            </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center bg-secondary p-10 rounded-2xl">
             <h3 className="text-3xl font-bold tracking-tight mb-6">Какой вариант выбрать?</h3>
            <p className="text-lg text-muted-foreground">
                Выбор между <strong>Fixed Price</strong> и <strong>Time &amp; Material</strong> зависит от проекта. Если требования четкие и не будут меняться — лучше <strong>Fixed Price</strong>. Если проект требует гибкости, и требования могут уточняться в процессе — <strong>Time &amp; Material</strong> будет более выгодным и эффективным вариантом.
            </p>
        </div>

      </div>
    </section>
  );
}
