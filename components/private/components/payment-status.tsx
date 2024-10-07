"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PaymentStatus() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader className="bg-blue-100">
          <CardTitle className="text-center text-blue-800 text-xl">
            ตรวจสอบการชำระเงิน
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Alert variant="destructive" className="mb-6 items-center flex">
              <XCircle className="h-4 w-4" />
              <AlertTitle>คุณไม่มีสิทธิ์ทำสัญญาครอบครองเครื่อง</AlertTitle>
            </Alert>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">รหัสนักศึกษา:</span>{" "}
                2410717302003
              </p>
              <p>
                <span className="font-semibold">ภาระค่าใช้จ่าย:</span> 40,500.00
                บาท
              </p>
              <p>
                <span className="font-semibold">จำนวนที่ชำระเงิน:</span>{" "}
                10,000.00 บาท
              </p>
              <p>
                <span className="font-semibold">คงเหลือ:</span> 30,500.00 บาท
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Alert className="mt-6">
              <AlertTitle>โปรดชำระเงินให้เรียบร้อยเพื่อรับสิทธิ์</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>
                    หากนักศึกษากู้ยืมเงินจากรัฐบาล/ทุนการศึกษาจากคณะ เช่น
                    ทุนรัตนบงกล โปรดรอให้อนุมัติทุนก่อน หรือชำระ 15,000 บาท
                    เพื่อได้รับสิทธิ์รับเครื่อง
                  </li>
                  <li>
                    หากนักศึกษาชำระเงินโดยการโอนเงินผ่านบัญชีธนาคาร
                    นักศึกษาจะต้องนำหลักฐานการโอนเงิน/สลิป ติดต่อกองการเงิน
                    อาคาร 1 ชั้น 2 เพื่อออกใบเสร็จให้เรียบร้อยก่อน ระบบฯ
                    จึงจะอัพเดทข้อมูลตรงกับการชำระเงิน
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
          </motion.div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-center gap-1">
          <Button className="bg-green-500 hover:bg-green-600">
            ชำระเงินออนไลน์
          </Button>
          <Button variant="secondary">ติดต่อสำนักทะเบียนและประมวลผล</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
