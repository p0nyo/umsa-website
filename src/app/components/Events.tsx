
import Bounded from "@/app/components/Bounded";
import Event from "@/app/components/Event"
import EventsCarousel from "./EventsCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true,  } 
const SLIDES = [
    "/landing-1.jpg",
    "/landing-2.jpg",
    "/landing-3.jpg",
    "/landing-4.jpg",
    "/landing-5.jpg",
    "/landing-1.jpg",
    "/landing-2.jpg",
    "/landing-3.jpg",
    "/landing-4.jpg",
    "/landing-5.jpg"
]
const SLIDE_COUNT = 10
const INDEX = Array.from(Array(SLIDE_COUNT).keys())

export default function Events() {
  return (
    <div className="relative bg-starImg bg-cover min-h-screen" id="events">
      <div className="absolute inset-0 bg-blueOverlay opacity-65"></div>
      <Bounded
        className="relative text-white"
      >
        <div className="">

          <div>
            <p className="text-8xl transparent-y-gradient pb-16"> 
                <span className="font-light">
                    events by
                </span> 
                <span className="font-bold">
                    &nbsp;umsa. 
                </span>
            </p>
            <div className="flex flex-col justify-center items-center">
              <EventsCarousel index={INDEX} slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
          {/* <span className="text-4xl text-white font-light transparent-y-gradient"> 
            upcoming...  
          </span>
          <div className="grid grid-cols-2 gap-x-5">
            <Event />
            <Event />
          </div> */}
          <img className="absolute bottom-0 right-0 translate-y-2/3 -translate-x-2/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg"></img>
        </div>

      </Bounded>
    </div>
  );
};
