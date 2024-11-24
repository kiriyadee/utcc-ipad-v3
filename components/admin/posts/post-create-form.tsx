"use client";

import { createPost, CreatePostState } from "@/actions/admin/posts/create-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormState } from "react-dom";

export default function PostCreateForm({}: {}) {
  const initialState: CreatePostState = {};
  const [state, dispatch] = useFormState(createPost, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <div>
          <Label>Title</Label>
          <Input name="title" />
          {state.errors?.title?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Content</Label>
          <Input name="content" />
          {state.errors?.content?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label className="mr-2">Is Draft</Label>
          <Checkbox name="isDraft" />
          {state.errors?.isDraft?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Published At</Label>
          <Input name="publishedAt" />
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
        </div>
      </form>
    </div>
  );
}
