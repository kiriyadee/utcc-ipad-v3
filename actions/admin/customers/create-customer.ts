"use server";

import { db } from "@/lib/db";
import { customers } from "@/schema/customers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createInsertSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const insertCustomerSchema = createInsertSchema(customers);

export interface CreateCustomerState {
  errors?: {
    id?: string[];
    customerId?: string[];
    name?: string[];
    email?: string[];
  };
  message?: string;
}

export async function createCustomer(
  prevState: CreateCustomerState,
  formData: FormData
): Promise<CreateCustomerState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }


  const validatedFields = insertCustomerSchema.safeParse({
    customerId: formData.get("customerId") ? parseInt(formData.get("customerId") as string) : null,
    name: (formData.get("name") as string) || null,
    email: (formData.get("email") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.insert(customers).values(validatedFields.data);

  revalidatePath("/admin/customers");
  redirect("/admin/customers");
}
