import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";

export default function LoanDetails() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">รายละเอียดการยื่นกู้</h1>

      <Card className="mb-6">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ปีการศึกษา</TableHead>
                <TableHead>ชื่อสถานศึกษา</TableHead>
                <TableHead>ลักษณะการให้กู้ยืม</TableHead>
                <TableHead>เลขที่คำขอกู้ยืมเงิน</TableHead>
                <TableHead>สถานะคำขอ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ปริญญาตรี 2567</TableCell>
                <TableCell>มหาวิทยาลัยพอการค้าไทย</TableCell>
                <TableCell>
                  ลักษณะที่ 2 สาขาวิชาที่เป็นความต้องการหลัก
                </TableCell>
                <TableCell>L25670015641029841</TableCell>
                <TableCell className="text-green-600 font-medium">
                  คำขอกู้ยืมเงินได้รับการอนุมัติ
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Tabs defaultValue="documents">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="loan">คำขอยืมกู้</TabsTrigger>
          <TabsTrigger value="documents">เอกสารยืนกู้</TabsTrigger>
          <TabsTrigger value="contract">สัญญากู้ยืมเงิน</TabsTrigger>
          <TabsTrigger value="transactions">รายการเบิกเงินกู้ยืม</TabsTrigger>
        </TabsList>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>เอกสารประกอบการพิจารณาผู้กู้ยืมเงิน</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <div className="flex items-center justify-between">
                    <span>
                      หนังสือให้ความยินยอมเปิดเผยข้อมูลและสำเนาบัตรประชาชน
                    </span>
                    <Button variant="outline" size="sm">
                      <Paperclip className="mr-2 h-4 w-4" />
                      หนังสือให้ความยินยอมในการเปิ...
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <span>3-04111421.pdf</span>
                    <Button variant="outline" size="sm">
                      <Paperclip className="mr-2 h-4 w-4" />
                      3-04111421.pdf
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <span>
                      หนังสือให้ความยินยอมเปิดเผยข้อมูลและสำเนาบัตรประชาชน
                    </span>
                    <Button variant="outline" size="sm">
                      <Paperclip className="mr-2 h-4 w-4" />
                      หนังสือให้ความยินยอมในการเปิ...
                    </Button>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
