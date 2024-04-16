"use client";

import { createProjectAction } from "@/app/_actions";
import { useTransition } from "react";
import { LoadingButton } from "./loading-button";
import { useRouter } from "next/navigation";

export function CreateProjectForm() {
  const [pending, startCreateProject] = useTransition();
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        startCreateProject(async () => {
          await createProjectAction();
          router.push("/");
        });
      }}
      className="flex flex-col gap-2 w-full"
    >
      <input
        type="text"
        placeholder="Name"
        className="bg-black p-2 border border-gray-900"
        autoFocus
      />
      <LoadingButton loading={pending}>Create Project</LoadingButton>
    </form>
  );
}
