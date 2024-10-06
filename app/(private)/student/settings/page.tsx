import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, User } from "lucide-react";

export default function UserSettings() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">การตั้งค่าผู้ใช้งาน</h1>

      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Bell className="w-6 h-6" />
          <CardTitle>ตั้งค่าการแจ้งเตือน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              ตั้งค่าการแจ้งเตือนผ่านช่องทางอีเมล
            </p>
            <p className="text-sm text-gray-500">
              สำหรับการแจ้งเตือนผ่านช่องทางอีเมล
              คุณสามารถเลือกประเภทการแจ้งเตือนได้
            </p>
            <Button
              variant="link"
              className="p-0 h-auto font-normal text-blue-600"
            >
              ตั้งค่าการแจ้งเตือน
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <User className="w-6 h-6" />
          <CardTitle>
            วิธีการบัญชีผู้ใช้งาน กยศ. Connect และ เว็บไซต์ กยศ.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              สำหรับวิธีการบัญชีผู้ใช้งาน กยศ. Connect และ เว็บไซต์ กยศ. ของคุณ
            </p>
            <Button
              variant="link"
              className="p-0 h-auto font-normal text-blue-600"
            >
              ลบบัญชีผู้ใช้งาน
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-start">
        <Button variant="outline">ยกเลิก</Button>
      </div>
    </div>
  );
}
