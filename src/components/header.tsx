'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linkData = [
  {
    name: "dashboard",
    href: "/dashboard",
  },
  {
    name: "setting",
    href: "/setting",
  },
  {
    name: "about",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute top-0 left-0 right-0 container mx-auto  flex justify-between items-center p-4 text-white text-xl z-10">
      <div onClick={() => (window.location.href = "/")} className={`${pathname === '/'?'text-purple-500':''} cursor-pointer`}>Home</div>
      <div className="flex space-x-4">
        {linkData.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={pathname === item.href ? "text-purple-500" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
