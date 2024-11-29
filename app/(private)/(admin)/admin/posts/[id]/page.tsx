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
      <h1 className="text-3xl font-bold mb-6">Post</h1>
      <div>
        <p><strong>Id:</strong> { post.id }</p>
        <p><strong>Title:</strong> { post.title?.toString() }</p>
        <p><strong>Content:</strong> { post.content?.toString() }</p>
        <p><strong>Is Draft:</strong> { post.isDraft?.toString() }</p>
        <p><strong>Published At:</strong> { post.publishedAt?.toString() }</p>
      </div>
    </div>
  );
}
