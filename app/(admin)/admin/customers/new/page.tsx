import { db } from "@/lib/db";
import CustomerCreateForm from "@/components/admin/customers/customer-create-form";

export default async function Page() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Customer</h1>
      <CustomerCreateForm 
      />
    </div>
  );
}
