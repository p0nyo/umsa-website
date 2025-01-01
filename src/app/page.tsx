import Image from "next/image";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";


import { Metadata } from "next";



export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events />
      <Team />
    </div>
  )
}
