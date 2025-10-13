"use client";
import { updateSnippet } from "@/actions";
import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippets } from "@prisma/client";

export default function EditorComp({
  id,
  snippet,
}: {
  id: string;
  snippet: Snippets;
}) {
  const [name, setName] = useState(snippet.name);
  const [code, setCode] = useState(snippet.code);

  return (
    <div className="flex flex-col gap-4">
      <input
        value={name}
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={(e) => setName(e.target.value)}
      />
      <Editor
        defaultValue={code}
        language="javascript"
        theme="vs-dark"
        height={"40vh"}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(value = "") => setCode(value)}
      />
      <form action={() => updateSnippet(id, name, code)}>
        <button className="w-1/4 h-10 bg-gray-500 rounded text-white px-2 py-1 block my-0 mx-auto">
          save
        </button>
      </form>
    </div>
  );
}
