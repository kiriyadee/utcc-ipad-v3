import StudentUpdateForm from "@/components/private/students/student-update-form";
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
      <h1 className="text-3xl font-bold mb-6">Update Student</h1>
      <StudentUpdateForm 
        student={ student }
      />
    </div>
  );
}
