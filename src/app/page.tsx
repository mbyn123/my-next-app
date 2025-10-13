import { getSnippets } from "@/actions";
import Link from "next/link";

export default async function Home() {
  const snippets = await getSnippets();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>Snippets</h1>
        <Link
          href="/snippets/add"
          className="bg-gray-500 rounded text-white px-4 py-2"
        >
          Add Snippet
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {
          snippets.map((snippet) => (
            <Link
              href={`/snippets/${snippet.id}`}
              key={snippet.id}
              className="w-full border border-teal-300 rounded px-2 py-2 flex justify-between items-end cursor-pointer"
            >
              <div>{snippet.name}</div>
              <div className="bg-gray-500 rounded text-white px-2 py-1">View</div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
