import { db } from "@/lib/db";
import { customers } from "@/schema/customers";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  const customer = await db.query.customers.findFirst({ where: eq(customers.id, id) });

  if (!customer) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <div>
        <p><strong>Id:</strong> { customer.id }</p>
        <p><strong>Customer Id:</strong> { customer.customerId?.toString() }</p>
        <p><strong>Name:</strong> { customer.name?.toString() }</p>
        <p><strong>Email:</strong> { customer.email?.toString() }</p>
      </div>
    </div>
  );
}
