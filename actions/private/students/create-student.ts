"use server";

import { db } from "@/lib/db";
import { students } from "@/schema/students";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createInsertSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";

const insertStudentSchema = createInsertSchema(students);

export interface CreateStudentState {
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

export async function createStudent(
  prevState: CreateStudentState,
  formData: FormData
): Promise<CreateStudentState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }



  const validatedFields = insertStudentSchema.safeParse({
    studentId: formData.get("studentId") ? parseInt(formData.get("studentId") as string) : null,
    fristName: (formData.get("fristName") as string) || null,
    lastName: (formData.get("lastName") as string) || null,
    email: (formData.get("email") as string) || null,
    phone: (formData.get("phone") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.insert(students).values(validatedFields.data);

  revalidatePath("/students");
  redirect("/students");
}
