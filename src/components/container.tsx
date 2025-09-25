import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  title: string;
  image: StaticImageData;
}

export default function Container(props:IProps) {
  return (
    <div className="w-screen h-screen relative">
      <Image src={props.image} alt="home" className="object-fill w-full h-full"></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl">{props.title}</div>
    </div>
  );
}
