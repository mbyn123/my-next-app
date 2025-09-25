'use client'

import Link from "next/link";
import { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-black p-4 mt-10">
    
      <h2>dashboard tempkate {count}</h2>
      <button className="bg-black text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>increment</button>
      <div>{children}</div>
    </div>
  );
}
