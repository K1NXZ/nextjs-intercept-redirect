import { useRouter } from "next/navigation";

export function ModalDialog({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center backdrop-blur-md">
      <div className="w-[80vw] h-[80dvh] bg-black border border-gray-700 rounded-lg p-4">
        <div className="flex w-full justify-end py-2">
          <button onClick={() => router.back()}>[x] Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
