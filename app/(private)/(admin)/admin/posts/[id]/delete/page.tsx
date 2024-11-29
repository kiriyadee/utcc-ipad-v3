import PostDeleteForm from "@/components/admin/posts/post-delete-form";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const post = await db.query.posts.findFirst({ where: eq(posts.id, id) });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Delete Post</h1>
      <PostDeleteForm post={ post } />
    </div>
  );
}
