"use server";

import { db } from "@/lib/db";
import { students } from "@/schema/students";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";

const deleteStudentSchema = createSelectSchema(students).pick({ id: true });

export interface DeleteStudentState {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function deleteStudent(
  prevState: DeleteStudentState,
  formData: FormData
): Promise<DeleteStudentState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }


  const validatedFields = deleteStudentSchema.safeParse({
    id: (formData.get("id") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.delete(students).where(eq(students.id, validatedFields.data.id));

  revalidatePath("/students");
  redirect("/students");
}
