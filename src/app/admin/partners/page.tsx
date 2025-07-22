
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import AdminLayout from "@/components/layout/admin-layout";

const partners = [
  {
    fullName: "Олег Ефремов",
    companyName: "ООО 'ИнноТех'",
    email: "o.efremov@innotech.com",
    status: "Новый",
  },
  {
    fullName: "Анна Новикова",
    companyName: "Digital Wings",
    email: "anna.n@digitalwings.agency",
    status: "В работе",
  },
  {
    fullName: "Петр Григорьев",
    companyName: "Cyber Solutions",
    email: "p.grigoriev@cybersolutions.dev",
    status: "Одобрено",
  },
   {
    fullName: "Светлана Белова",
    companyName: "NextGen Logistics",
    email: "s.belova@nextgen.log",
    status: "Новый",
  },
  {
    fullName: "Дмитрий Захаров",
    companyName: "QuantumLeap AI",
    email: "d.zakharov@quantumleap.ai",
    status: "Одобрено",
  },
];

export default function AdminPartnersPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Партнеры</CardTitle>
              <CardDescription>
                Список компаний, которые хотят стать партнерами.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ФИО</TableHead>
                    <TableHead>Название компании</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partners.map((partner) => (
                    <TableRow key={partner.email}>
                      <TableCell className="font-medium">{partner.fullName}</TableCell>
                      <TableCell>{partner.companyName}</TableCell>
                      <TableCell>{partner.email}</TableCell>
                      <TableCell>
                         <Badge 
                          variant={
                            partner.status === "Новый" ? "default" : 
                            partner.status === "В работе" ? "secondary" : "outline"
                          }
                        >
                          {partner.status}
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
