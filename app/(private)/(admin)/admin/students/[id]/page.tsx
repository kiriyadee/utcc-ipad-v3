import { db } from "@/lib/db";
import { students } from "@/schema/students";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  const student = await db.query.students.findFirst({ where: eq(students.id, id) });

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div>
        <p><strong>Id:</strong> { student.id }</p>
        <p><strong>Student Id:</strong> { student.studentId?.toString() }</p>
        <p><strong>Frist Name:</strong> { student.fristName?.toString() }</p>
        <p><strong>Last Name:</strong> { student.lastName?.toString() }</p>
        <p><strong>Email:</strong> { student.email?.toString() }</p>
        <p><strong>Phone:</strong> { student.phone?.toString() }</p>
      </div>
    </div>
  );
}
