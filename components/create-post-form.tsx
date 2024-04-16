"use client";

import { createPostAction } from "@/app/_actions";
import { SubmitButton } from "./submit-button";

export function CreatePostForm() {
  return (
    <form action={createPostAction} className="flex flex-col gap-2 w-full">
      <input
        type="text"
        placeholder="Title"
        className="bg-black p-2 border border-gray-900"
        autoFocus
      />
      <textarea
        placeholder="Content"
        className="bg-black p-2 border border-gray-900"
      />
      <SubmitButton>Create Post</SubmitButton>
    </form>
  );
}
