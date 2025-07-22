
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import AdminLayout from "@/components/layout/admin-layout";

const clients = [
  {
    name: "Иван Петров",
    email: "ivan.p@example.com",
    message: "Здравствуйте, интересует разработка мобильного приложения для нашего стартапа. Можем ли мы обсудить детали?",
    status: "Новый",
  },
  {
    name: "Мария Сидорова",
    email: "m.sidorova@corp.net",
    message: "Нашей компании требуется интеграция CRM-системы. Есть ли у вас опыт в подобных проектах?",
    status: "В работе",
  },
  {
    name: "Алексей Смирнов",
    email: "alex.smirnov@mail.ru",
    message: "Хочу заказать у вас UI/UX дизайн для нашего веб-сайта. Прикрепил ТЗ.",
    status: "Архив",
  },
  {
    name: "Елена Васильева",
    email: "e.vasilieva@company.com",
    message: "Нужна консультация по AI-решениям для автоматизации логистики.",
    status: "Новый",
  },
];

export default function AdminClientsPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Клиенты</CardTitle>
              <CardDescription>
                Список потенциальных клиентов, оставивших заявку через форму обратной связи.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Имя</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Сообщение</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.email}>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell className="max-w-xs truncate">{client.message}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            client.status === "Новый" ? "default" : 
                            client.status === "В работе" ? "secondary" : "outline"
                          }
                        >
                          {client.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </AdminLayout>
  );
}
