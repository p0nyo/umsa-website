import Image from "next/image";
import Header from "./components/Header";
import Globe from "./components/Globe";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";

import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("single_scroll_page");

  return <SliceZone slices={page.data.slices} components={components} />
}
