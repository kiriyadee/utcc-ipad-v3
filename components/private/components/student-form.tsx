import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";
import LoanDetails from "./loan-details";
import PaymentStatus from "./payment-status";

export default async function StudentForm() {
  const session = await auth();
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-lg font-medium">ข้อมูลคำขอ</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-6 space-x-1">
            <TabsTrigger value="info">ข้อมูลผู้ยืม</TabsTrigger>
            <TabsTrigger value="payment">การชำระเงิน</TabsTrigger>
            <TabsTrigger value="documents">ตรวจสอบสิทธิ์</TabsTrigger>
            <TabsTrigger value="contract">ตรวจสอบข้อมูล</TabsTrigger>
            <TabsTrigger value="aprrove">ยืนยอมสัญญา</TabsTrigger>
            <TabsTrigger value="transactions">ข้อมูลเครื่อง</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">ข้อมูลผู้ยืม</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ชื่อ - นามสกุล</Label>
                    <Input
                      id="name"
                      placeholder={session?.user?.name ?? ""}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">วัน เดือน ปีเกิด</Label>
                    <Input id="birthdate" placeholder="วัน เดือน ปีเกิด" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id">เลขประจำตัวประชาชน</Label>
                    <Input id="id" placeholder="เลขประจำตัวประชาชน" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">อายุ</Label>
                    <Input id="age" placeholder="อายุ" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">ข้อมูลการติดต่อ</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">เบอร์โทรศัพท์มือถือ</Label>
                    <Input id="phone" placeholder="เบอร์โทรศัพท์มือถือ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล</Label>
                    <Input id="email" placeholder="อีเมล" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  ระดับการศึกษาที่ขอยืมกู้
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="academic-year">ปีการศึกษา</Label>
                    <Input id="academic-year" placeholder="ปีการศึกษา" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester">ภาคเรียน</Label>
                    <Input id="semester" placeholder="ภาคเรียน" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education-level">ระดับการศึกษา</Label>
                    <Input id="education-level" placeholder="ระดับการศึกษา" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">ชื่อสถานศึกษา</Label>
                    <Input id="university" placeholder="ชื่อสถานศึกษา" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty">คณะ</Label>
                    <Input id="faculty" placeholder="คณะ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="major">หลักสูตร</Label>
                    <Input id="major" placeholder="หลักสูตร" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <LoanDetails />
          </TabsContent>
          <TabsContent value="payment">
            <PaymentStatus />
          </TabsContent>
          {/* Add other TabsContent for documents, contract, and transactions */}
        </Tabs>
      </CardContent>
    </Card>
  );
}
