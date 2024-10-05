"use server";

import { db } from "@/lib/db";
import { customers } from "@/schema/customers";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const deleteCustomerSchema = createSelectSchema(customers).pick({ id: true });

export interface DeleteCustomerState {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function deleteCustomer(
  prevState: DeleteCustomerState,
  formData: FormData
): Promise<DeleteCustomerState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }

  const validatedFields = deleteCustomerSchema.safeParse({
    id: (formData.get("id") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.delete(customers).where(eq(customers.id, validatedFields.data.id));

  revalidatePath("/admin/customers");
  redirect("/admin/customers");
}
