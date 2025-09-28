import { Metadata } from "next";
import React from "react";
import BlogList from "../components/blogList";
import { data } from "./data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog description",
};

export default function page() {
  return (
    <div>
     <BlogList data={data} />
    </div>
  );
}
