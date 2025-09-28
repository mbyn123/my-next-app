import React from "react";
import Image from "next/image";
import { products } from "../../products";

export default function page({ params }: { params: { id: string } }) {
  const product = products?.find(
    (product) => product.id === parseInt(params.id)
  );
  return (
    <div className="mx-auto container flex flex-col items-center justify-center pt-6">
      <Image
        alt={product?.imageAlt || ""}
        src={product?.imageSrc || ""}
        width={300}
        height={300}
      />
      <div className="border-2 border-dotted border-black p-4 rounded-md mt-6">
        <p>
          <strong>Name:</strong> {product?.name}
        </p>
        <p>
          <strong>Price:</strong> {product?.price}
        </p>
        <p>
          <strong>Description:</strong> {product?.imageAlt}
        </p>
      </div>
    </div>
  );
}
