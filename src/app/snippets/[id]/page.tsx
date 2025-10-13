import { getSnippet, getSnippets } from "@/actions";
import DeleteButton from "@/components/deleteButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
    const snippets = await getSnippets();
    return snippets.map((snippet) => ({
        id: snippet.id.toString(),
    }))
} 

export default async function Detail(props: { params: { id: string } }) {
  const { id } = props.params;
  if(!id || isNaN(Number(id))){
    return notFound()
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const snippet = await getSnippet(id);
  if(!snippet){
    return notFound()
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">{snippet?.name}</h1>
        <Link
          href={`/snippets/${id}/edit`}
          className="bg-gray-500 rounded text-white px-2 py-1 ml-auto mr-2"
        >
          Edit
        </Link>
       <DeleteButton id={id}/>
      </div>
      <pre className="w-full h-40 bg-gray-100 border  px-2 py-2">
        <code className="text-gray-800">{snippet?.code}</code>
      </pre>
    </div>
  );
}
