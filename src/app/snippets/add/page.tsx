'use client'
import { addSnippet } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

export default  function Add() {

  const [state, dispatch] = useFormState(addSnippet,{message:''})

  return (
    <div>
      <h2 className="mb-4">Create a Snippet</h2>
      <form action={dispatch} className="flex flex-col gap-4">
        <div className="flex align-center">
          <label htmlFor="name" className="w-20">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-10 border border-teal-300 rounded px-2"
          />
        </div>
        <div className="flex align-center">
          <label htmlFor="code" className="w-20">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full h-40 border border-teal-300 rounded px-2"
          ></textarea>
        </div>
        <div className="text-red-500">{state.message}</div>
        <button
          type="submit"
          className="w-full h-10 bg-gray-500 rounded text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}
