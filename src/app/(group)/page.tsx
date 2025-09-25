import Container from "@/components/container";
import icon_home from "/public/image/home.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <Container title="hello word" image={icon_home} /> 
  );
}
