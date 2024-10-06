import StudentInfoForm from "@/components/private/components/student-info-form";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <div>
        <StudentInfoForm />
        <div>User: {session?.user?.name}</div>
        <div>Email: {session?.user?.email}</div>
      </div>
    </div>
  );
}
