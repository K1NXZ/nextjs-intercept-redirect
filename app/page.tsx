import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <Link href="/create/post">Create Post</Link>
      <Link href="/create/project">Create Project</Link>
    </div>
  );
}
