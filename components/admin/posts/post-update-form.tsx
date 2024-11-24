"use client";

import { updatePost, UpdatePostState } from "@/actions/admin/posts/update-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { useFormState } from "react-dom";
import { Post } from "@/schema/posts";

export default function PostUpdateForm({ post }: { post: Post }) {
  const initialState: UpdatePostState = {};
  const [state, dispatch] = useFormState(updatePost, initialState);

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
          <Label>Title</Label>
          <Input name="title" defaultValue={post.title ?? ""} />
          {state.errors?.title?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Content</Label>
          <Input name="content" defaultValue={post.content ?? ""} />
          {state.errors?.content?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label className="mr-2">Is Draft</Label>
          <Checkbox name="isDraft" defaultChecked={post.isDraft ?? false} />
          {state.errors?.isDraft?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Published At</Label>
          <Input
            name="publishedAt"
            defaultValue={post.publishedAt?.toISOString() ?? ""}
          />
          {state.errors?.publishedAt?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          {state.message === "error" && <p className="text-red-500">error</p>}
          {state.message === "success" && (
            <p className="text-green-500">success</p>
          )}
        </div>
      </form>
    </div>
  );
}
