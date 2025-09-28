"use client";
import React from "react";
import Image from "next/image";
import { products } from "../../../products";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const product = products?.find(
    (product) => product.id === parseInt(params.id)
  );

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => router.back()}
    >
      <Image
        alt={product?.imageAlt || ""}
        src={product?.imageSrc || ""}
        width={300}
        height={300}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
