
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Team from "./components/pages/Team";
import Sponsors from "./components/pages/Sponsors";
import Faq from "./components/pages/Faq";


export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events />
      <Team />
      {/* <Sponsors /> */}
      <Faq />
    </div>
  )
}
