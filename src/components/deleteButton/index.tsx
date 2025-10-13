'use client'
import { deleteSnippet } from '@/actions'
import React from 'react'

export default function DeleteButton({id}: {id: string}) {
  return (
     <div className="bg-red-500 rounded text-white px-2 py-1 cursor-pointer" onClick={() => deleteSnippet(id)}>Delete</div>
  )
}
