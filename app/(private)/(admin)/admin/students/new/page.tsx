import { db } from "@/lib/db";
import StudentCreateForm from "@/components/private/students/student-create-form";

export default async function Page() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Student</h1>
      <StudentCreateForm 
      />
    </div>
  );
}
