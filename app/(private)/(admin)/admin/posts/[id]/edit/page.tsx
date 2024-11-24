import PostUpdateForm from "@/components/admin/posts/post-update-form";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await db.query.posts.findFirst({ where: eq(posts.id, id) });

  if (!post) {
    notFound();
  }


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Update Post</h1>
      <PostUpdateForm 
        post={ post }
      />
    </div>
  );
}
