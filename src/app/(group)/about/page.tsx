import Container from '@/components/container'
import React from 'react'
import icon_about from "/public/image/about.png";
import { Metadata } from "next";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'About',
}

export default function page() {
//  notFound()
  return (
   <Container title="about" image={icon_about} /> 
  )
}
