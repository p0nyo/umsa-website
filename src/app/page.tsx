import Image from "next/image";
import Header from "./components/Header";
import Globe from "./components/Globe";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full">
          <About />
          <Events />
          <Team /> 
        </div>
      </main>
  );
}
