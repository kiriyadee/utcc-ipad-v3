import CustomerUpdateForm from "@/components/admin/customers/customer-update-form";
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
      <h1 className="text-3xl font-bold mb-6">Update Customer</h1>
      <CustomerUpdateForm 
        customer={ customer }
      />
    </div>
  );
}
