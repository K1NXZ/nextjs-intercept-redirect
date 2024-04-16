"use server";

import { redirect } from "next/navigation";

export async function createPostAction(data: FormData) {
  redirect("/");
}

export async function createProjectAction() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
