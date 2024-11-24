import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { students } from "@/schema/students";
import Pagination from "@/components/pagination";
import StudentTable from "@/components/private/students/student-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Icons } from "@/components/icons";
import StudentExcelDialog from "@/components/private/students/student-upload-excel";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; pageSize: string };
}) {
  const page = parseInt(searchParams.page) || 1;
  const pageIndex = page - 1;
  const pageSize = parseInt(searchParams.pageSize) || 10;
  const countRecords = await db.select({ value: count() }).from(students);
  const countRecord = countRecords[0];
  const totalPages = Math.ceil(countRecord.value / pageSize);
  const studentList = await db.query.students.findMany({
    limit: pageSize,
    offset: pageIndex * pageSize,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="text-right mr-2">
        <Link href="/admin/students/new">
          <Button>
            <PlusIcon className="mr-2" /> New
          </Button>
        </Link>
        <Link href={""}>
          <Button>
            <StudentExcelDialog />
          </Button>
        </Link>
      </div>
      <div className="mb-5">
        <StudentTable studentList={studentList} />
      </div>
      <div>
        <Pagination page={page} pageSize={pageSize} totalPages={totalPages} />
      </div>
    </div>
  );
}
