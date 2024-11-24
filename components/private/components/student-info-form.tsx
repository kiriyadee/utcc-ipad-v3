import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

export default function StudentInfoForm() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">ข้อมูลส่วนตัว</h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">ข้อมูลส่วนตัว</CardTitle>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            แก้ไขข้อมูลส่วนตัว
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">ชื่อ - นามสกุล</Label>
              <Input id="name" value="นาย จันทร์วัฒน์ ภิรมย์ดี" readOnly />
            </div>
            <div>
              <Label htmlFor="id">เลขประจำตัวประชาชน</Label>
              <Input id="id" value="1-3207-013XX-XX-X" readOnly />
            </div>
            <div>
              <Label htmlFor="birthdate">วัน เดือน ปีเกิด</Label>
              <Input id="birthdate" value="25 ธ.ค. 2543" readOnly />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">ข้อมูลการติดต่อ</CardTitle>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            แก้ไขข้อมูลการติดต่อ
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">เบอร์โทรศัพท์มือถือ</Label>
              <Input id="phone" value="062-558-XXXX" readOnly />
            </div>
            <div>
              <Label htmlFor="email">อีเมล</Label>
              <Input id="email" value="wXXXXXXXXXXXt@gmail.com" readOnly />
            </div>
            <div>
              <Label htmlFor="address">ที่อยู่ในการจัดส่งเอกสาร</Label>
              <Input id="address" value="ไม่มี" readOnly />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            ข้อมูลตามทะเบียนบ้าน
          </CardTitle>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            แก้ไขข้อมูลตามทะเบียนบ้าน
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="house-number">เลขที่บ้าน</Label>
              <Input id="house-number" value="89" readOnly />
            </div>
            <div>
              <Label htmlFor="village-number">หมู่ที่</Label>
              <Input id="village-number" value="7" readOnly />
            </div>
            <div>
              <Label htmlFor="subdistrict">ตำบล/แขวง</Label>
              <Input id="subdistrict" value="วัดเพลง" readOnly />
            </div>
            <div>
              <Label htmlFor="district">อำเภอ/เขต</Label>
              <Input id="district" value="วัดเพลง" readOnly />
            </div>
            <div>
              <Label htmlFor="province">จังหวัด</Label>
              <Input id="province" value="ราชบุรี" readOnly />
            </div>
            <div>
              <Label htmlFor="postal-code">รหัสไปรษณีย์</Label>
              <Input id="postal-code" value="32130" readOnly />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            ข้อมูลที่อยู่ปัจจุบัน
          </CardTitle>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            แก้ไขที่อยู่ปัจจุบัน
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500">ตามที่อยู่ทะเบียนบ้าน</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">ข้อมูลการทำงาน</CardTitle>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            แก้ไขข้อมูลการทำงาน
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500">ไม่มีข้อมูล</div>
        </CardContent>
      </Card>
    </div>
  );
}
