"use server";

import { db } from "@/lib/db";
import { students } from "@/schema/students";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";

const updateStudentSchema = createSelectSchema(students).partial();

export interface UpdateStudentState {
  errors?: {
    id?: string[];
    studentId?: string[];
    fristName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
  };
  message?: string;
}

export async function updateStudent(
  prevState: UpdateStudentState,
  formData: FormData
): Promise<UpdateStudentState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }



  const validatedFields = updateStudentSchema.safeParse({
    id: (formData.get("id") as string) || null,
    studentId: formData.get("studentId") ? parseInt(formData.get("studentId") as string) : null,
    fristName: (formData.get("fristName") as string) || null,
    lastName: (formData.get("lastName") as string) || null,
    email: (formData.get("email") as string) || null,
    phone: (formData.get("phone") as string) || null,
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
    .update(students)
    .set(validatedFields.data)
    .where(eq(students.id, validatedFields.data.id));

  revalidatePath("/students");
  revalidatePath("/students/" + validatedFields.data.id);
  revalidatePath("/students/" + validatedFields.data.id + "/edit");

  return {
    message: "success",
  };
}
