
import Landing from "./components/Landing";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";


export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Faq />
    </div>
  )
}
