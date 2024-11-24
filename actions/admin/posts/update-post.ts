"use server";

import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createSelectSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const updatePostSchema = createSelectSchema(posts).partial();

export interface UpdatePostState {
  errors?: {
    id?: string[];
    title?: string[];
    content?: string[];
    isDraft?: string[];
    publishedAt?: string[];
  };
  message?: string;
}

export async function updatePost(
  prevState: UpdatePostState,
  formData: FormData
): Promise<UpdatePostState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }


  const validatedFields = updatePostSchema.safeParse({
    id: (formData.get("id") as string) || null,
    title: (formData.get("title") as string) || null,
    content: (formData.get("content") as string) || null,
    isDraft: !!formData.get("isDraft"),
    publishedAt: formData.get("publishedAt") ? new Date(formData.get("publishedAt") as string) : null,
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
    .update(posts)
    .set(validatedFields.data)
    .where(eq(posts.id, validatedFields.data.id));

  revalidatePath("/admin/posts");
  revalidatePath("/admin/posts/" + validatedFields.data.id);
  revalidatePath("/admin/posts/" + validatedFields.data.id + "/edit");

  return {
    message: "success",
  };
}
