'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname()
  console.log('params',pathname)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto">
      <div className="flex gap-4  font-bold text-lg">
        <Link className={pathname === '/dashboard/about' ? 'text-purple-500' : ''} href="/dashboard/about">about</Link>
        <Link className={pathname === '/dashboard/settings' ? 'text-purple-500' : ''} href="/dashboard/settings">settings</Link>
      </div>
      <h2>dashboard layout {count}</h2>
      <button className="bg-black text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>increment</button>
      <div>{children}</div>
    </div>
  );
}
