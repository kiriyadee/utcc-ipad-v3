import { Student } from "@/schema/students";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentTable({
  studentList,
}: {
  studentList: Student[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Student Id</TableHead>
          <TableHead>Frist Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {studentList.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.id?.slice(0, 8)}</TableCell>
            <TableCell>{student.studentId?.toString()}</TableCell>
            <TableCell>{student.fristName?.toString()}</TableCell>
            <TableCell>{student.lastName?.toString()}</TableCell>
            <TableCell>{student.email?.toString()}</TableCell>
            <TableCell>{student.phone?.toString()}</TableCell>
            <TableCell className="justify-end flex gap-2">
              <Link href={`/students/${student.id}`}>
                <Button size="icon" variant="outline">
                  <EyeOpenIcon />
                </Button>
              </Link>
              <Link href={`/students/${student.id}/edit`}>
                <Button size="icon" variant="outline">
                  <Pencil1Icon />
                </Button>
              </Link>
              <Link href={`/students/${student.id}/delete`}>
                <Button size="icon" variant="outline">
                  <TrashIcon />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
