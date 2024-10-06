"use client";

import { useState, useEffect } from "react";

interface Status {
  id: number;
  title: string;
  completed: boolean;
  date?: string;
}

interface PricingTable {
  type: string;
  year1sem1: number;
  year1sem2: number;
  year2sem1: number;
  year2sem2?: number;
  year3sem1?: number;
  year3sem2?: number;
  year4sem1?: number;
}

interface Data {
  studentId: string;
  date: string;
  status: Status[];
  pricingTable: PricingTable[];
}
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock API function
const fetchData = async () => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    studentId: "2410717302003",
    date: "2024-09-29",
    status: [
      { id: 1, title: "ตรวจสอบการชำระเงิน", completed: true },
      {
        id: 2,
        title: "ตรวจสอบสิทธิ์การครอบครองเครื่อง",
        completed: true,
        date: "2024-05-25",
      },
      {
        id: 3,
        title: "ตรวจสอบข้อมูล และยืนยอมสัญญา",
        completed: true,
        date: "2024-09-24",
      },
      { id: 4, title: "ข้อมูลเครื่อง และจองอัพเกรด", completed: false },
    ],
    pricingTable: [
      {
        type: "ปกติ",
        year1sem1: 8000,
        year1sem2: 7000,
        year2sem1: 6000,
        year2sem2: 5000,
        year3sem1: 4000,
        year3sem2: 3000,
        year4sem1: 1000,
      },
      {
        type: "ทุนทุกประเภท (Gold)",
        year1sem1: 4000,
        year1sem2: 3000,
        year2sem1: 1000,
      },
      { type: "ทุน Silver", year1sem1: 3000, year1sem2: 1500, year2sem1: 500 },
    ],
  };
};

export default function IpadAgreementContact() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAgreement, setShowAgreement] = useState(false);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">กำลังโหลด...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>สัญญาครอบครองเครื่อง iPad (ระดับปริญญาตรี)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-4">
            รหัสนักศึกษา: {data?.studentId} | วันที่: {data?.date}
          </div>
          <motion.div layout className="space-y-4">
            {data?.status.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                {item.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Circle className="text-gray-300" />
                )}
                <span
                  className={
                    item.completed ? "text-green-500" : "text-gray-500"
                  }
                >
                  {item.title}
                </span>
                {item.date && (
                  <span className="text-sm text-gray-400">({item.date})</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>รายละเอียดสัญญา</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAgreement(!showAgreement)}
            >
              {showAgreement ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </CardTitle>
        </CardHeader>
        <AnimatePresence>
          {showAgreement && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent>
                <p className="text-sm text-gray-600">
                  สัญญาฉบับนี้ทำขึ้นระหว่างมหาวิทยาลัยกับนักศึกษา
                  โดยมีเงื่อนไขดังต่อไปนี้...
                </p>
                {/* Add more agreement details here */}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ตารางค่าใช้จ่าย</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ประเภท</TableHead>
                <TableHead>ปีที่ 1 เทอม 1</TableHead>
                <TableHead>ปีที่ 1 เทอม 2</TableHead>
                <TableHead>ปีที่ 2 เทอม 1</TableHead>
                <TableHead>ปีที่ 2 เทอม 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.pricingTable.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.year1sem1}</TableCell>
                  <TableCell>{row.year1sem2}</TableCell>
                  <TableCell>{row.year2sem1}</TableCell>
                  <TableCell>{row.year2sem2 || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
