"use server";

import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createInsertSchema } from "drizzle-zod";
import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";

const insertPostSchema = createInsertSchema(posts);

export interface CreatePostState {
  errors?: {
    id?: string[];
    title?: string[];
    content?: string[];
    isDraft?: string[];
    publishedAt?: string[];
  };
  message?: string;
}

export async function createPost(
  prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("access denied");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    throw new Error("unauthorized");
  }


  const validatedFields = insertPostSchema.safeParse({
    title: (formData.get("title") as string) || null,
    content: (formData.get("content") as string) || null,
    isDraft: !!formData.get("isDraft"),
    publishedAt: formData.get("publishedAt") ? new Date(formData.get("publishedAt") as string) : null,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }

  await db.insert(posts).values(validatedFields.data);

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}
