import { db } from "@/lib/db";
import PostCreateForm from "@/components/admin/posts/post-create-form";

export default async function Page() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      <PostCreateForm 
      />
    </div>
  );
}
