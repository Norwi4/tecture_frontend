import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WorkOptions() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Варианты работы
            </h1>
            <p className="text-lg text-muted-foreground">
              <strong>Time &amp; Material</strong> или <strong>Fixed Price</strong> - два основных типа контрактов, используемых в заказной разработке программного обеспечения, выбор между ними зависит от конкретных потребностей проекта и возможностей клиента
            </p>
          </div>
          <div className="relative h-80 w-full hidden md:block">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Work Options Illustration"
              fill
              style={{ objectFit: 'contain' }}
              data-ai-hint="work process illustration"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-border/20 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold">Time &amp; Material</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">Оплата по заранее оговоренным периодам за фактически потраченные ресурсы</p>
            </CardContent>
          </Card>
          <Card className="border border-border/20 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold">Fixed Price</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">Поэтапная оплата за оговоренный результат работ</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="relative h-80 w-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Fix price"
                fill
                style={{ objectFit: 'contain' }}
                data-ai-hint="fixed price contract"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Fix price и time &amp; material</h3>
              <p className="text-muted-foreground">
                контракты - два основных типа контрактов, используемых в заказной разработке программного обеспечения. Они имеют свои преимущества и недостатки, и выбор между ними зависит от конкретных потребностей проекта и возможностей клиента. <strong>Fix price</strong> контракт предусматривает фиксированную цену за выполнение определенного объема работ. Это означает, что клиент заранее может сформулировать окончательное задание, знает стоимость проекта и может спланировать свой бюджет. Однако, если в процессе работы возникают дополнительные задачи или изменения требований, то это приводит к дополнительным расходам для исполнителя и поэтому реализуется уже в рамках следующего договора на модернизацию.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-80 w-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Time and material"
                fill
                style={{ objectFit: 'contain' }}
                data-ai-hint="time material contract"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-6">
                <strong>Time &amp; material</strong> контракт предусматривает оплату за фактически затраченное время или другие использованные на выполнение проекта прямые затраты (например: закупку лицензий). Это позволяет клиенту гибко управлять проектом и вносить изменения в процессе работы. Однако, такой контракт может быть менее прозрачным в плане стоимости, поскольку клиент не знает заранее, сколько будет стоить проект. Если клиенту важно зафиксировать окончательный бюджет проекта, то применяется формат контракта <strong>time &amp; material with cap</strong>. При такой форме контракта сразу оговаривается максимальный бюджет проекта и заказчик с подрядчиком в совместной постоянной работе выбирают наиболее важное и нужное для проекта, что будет реализовано в рамках оговоренного бюджета.
              </p>
              <p className="text-muted-foreground">
                Выбор между <strong>fix price</strong> и <strong>time &amp; material</strong> контрактами зависит от конкретных потребностей проекта. Если проект имеет четкие требования и нет вероятности изменений, то fix price контракт будет более предпочтительным. Если же проект подвержен изменениям или не имеет окончательных требований и требует гибкости, то time &amp; material контракт будет более экономически выгодным вариантом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
