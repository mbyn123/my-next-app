import icon_setting from "/public/image/setting.png";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Setting',
}

export default function page() {
  return <Container title="setting" image={icon_setting} />;
}
