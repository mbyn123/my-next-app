
import icon_dashboard from "/public/image/dashboard.png";
import Container from '@/components/container'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function page() {
  return (
   <Container title="dashboard" image={icon_dashboard} /> 
  )
}
