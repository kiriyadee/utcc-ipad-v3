"use server";

import { db } from "@/lib/db";
import { customers } from "@/schema/customers";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const updateCustomerSchema = createSelectSchema(customers).partial();

export interface UpdateCustomerState {
  errors?: {
    id?: string[];
    customerId?: string[];
    name?: string[];
    email?: string[];
  };
  message?: string;
}

export async function updateCustomer(
  prevState: UpdateCustomerState,
  formData: FormData
): Promise<UpdateCustomerState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }


  const validatedFields = updateCustomerSchema.safeParse({
    id: (formData.get("id") as string) || null,
    customerId: formData.get("customerId") ? parseInt(formData.get("customerId") as string) : null,
    name: (formData.get("name") as string) || null,
    email: (formData.get("email") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "bad request",
    };
  }

  if (!validatedFields.data.id) {
    return {
      message: "id required"
    }
  }

  await db
    .update(customers)
    .set(validatedFields.data)
    .where(eq(customers.id, validatedFields.data.id));

  revalidatePath("/admin/customers");
  revalidatePath("/admin/customers/" + validatedFields.data.id);
  revalidatePath("/admin/customers/" + validatedFields.data.id + "/edit");

  return {
    message: "success",
  };
}
