import { auth } from "@/lib/auth";

export default async function AdminPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin</h1>
      <div>Email: {session?.user?.email}</div>
      <div>User: {session?.user?.name}</div>
    </div>
  );
}
