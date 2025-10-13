import { getSnippet } from "@/actions";
import EditorComp from "@/components/EditorComp";
import React from "react";

export default async function Edit({ params }: { params: { id: string } }) {
  const { id } = params;
  const snippet = await getSnippet(id);

  return (
    <div>
      <EditorComp id={id} snippet={snippet!} />
      </div>
    );
}
