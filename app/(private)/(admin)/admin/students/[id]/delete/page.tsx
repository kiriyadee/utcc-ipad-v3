import StudentDeleteForm from "@/components/private/students/student-delete-form";
import { db } from "@/lib/db";
import { students } from "@/schema/students";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const student = await db.query.students.findFirst({ where: eq(students.id, id) });

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Delete Student</h1>
      <StudentDeleteForm student={ student } />
    </div>
  );
}
