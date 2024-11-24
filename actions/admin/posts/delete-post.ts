"use server";

import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const deletePostSchema = createSelectSchema(posts).pick({ id: true });

export interface DeletePostState {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function deletePost(
  prevState: DeletePostState,
  formData: FormData
): Promise<DeletePostState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }

  const validatedFields = deletePostSchema.safeParse({
    id: (formData.get("id") as string) || null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.delete(posts).where(eq(posts.id, validatedFields.data.id));

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}
