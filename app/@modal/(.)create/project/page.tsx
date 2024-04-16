"use client";

import { CreateProjectForm } from "@/components/create-project-form";
import { ModalDialog } from "@/components/modal-dialog";

export default function CreateProjectModal() {
  return (
    <ModalDialog>
      <CreateProjectForm />
    </ModalDialog>
  );
}
