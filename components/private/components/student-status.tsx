import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function StudentStatus() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">รายงานสถานภาพการศึกษา</h1>

      <Card className="">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            ข้อมูลสถานภาพการศึกษา
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg mb-2">ข้อมูลการศึกษาปัจจุบัน</h4>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">ปีการศึกษา</TableCell>
                <TableCell>2567</TableCell>
                <TableCell className="font-semibold">ระดับชั้น</TableCell>
                <TableCell>ชั้นปีที่ 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">
                  ระดับการศึกษาปัจจุบัน
                </TableCell>
                <TableCell>ปริญญาตรี</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">รหัสสถานศึกษา</TableCell>
                <TableCell>001564</TableCell>
                <TableCell className="font-bold">ชื่อสถานศึกษา</TableCell>
                <TableCell>มหาวิทยาลัยหอการค้าไทย</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">จังหวัด</TableCell>
                <TableCell>กรุงเทพมหานคร</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">คณะ</TableCell>
                <TableCell>คณะวิศวกรรมศาสตร์</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">หลักสูตร</TableCell>
                <TableCell colSpan={3}>
                  หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้า
                  มหาวิทยาลัยหอการค้าไทย
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
