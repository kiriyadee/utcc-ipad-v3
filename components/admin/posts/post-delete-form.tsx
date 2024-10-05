"use client";

import { deletePost, DeletePostState } from "@/actions/admin/posts/delete-post";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { Post } from "@/schema/posts";

export default function PostDeleteForm({ post }: { post: Post }) {
  const initialState: DeletePostState = {};
  const [state, dispatch] = useFormState(deletePost, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={post.id} />
        <div>
          <p>
            <strong>Id:</strong> {post.id}
          </p>
        </div>
        <div>
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
