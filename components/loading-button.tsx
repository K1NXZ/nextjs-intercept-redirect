export function LoadingButton({
  loading = false,
  children,
}: {
  loading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button className="bg-black p-2 border border-gray-900">
      {loading ? "Loading..." : children}
    </button>
  );
}
