"use client";

import { CreatePostForm } from "@/components/create-post-form";
import { ModalDialog } from "@/components/modal-dialog";

export default function CreatePostModal() {
  return (
    <ModalDialog>
      <CreatePostForm />
    </ModalDialog>
  );
}
