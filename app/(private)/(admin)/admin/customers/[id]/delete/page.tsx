import CustomerDeleteForm from "@/components/admin/customers/customer-delete-form";
import { db } from "@/lib/db";
import { customers } from "@/schema/customers";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const customer = await db.query.customers.findFirst({ where: eq(customers.id, id) });

  if (!customer) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Delete Customer</h1>
      <CustomerDeleteForm customer={ customer } />
    </div>
  );
}
