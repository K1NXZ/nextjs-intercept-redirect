"use client";

import { useFormStatus } from "react-dom";
import { LoadingButton } from "./loading-button";

export function SubmitButton({ children }: { children?: React.ReactNode }) {
  const formStatus = useFormStatus();
  return <LoadingButton loading={formStatus.pending}>{children}</LoadingButton>;
}
