
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
            <div className="grid grid-cols-6 gap-x-10 justify-center items-center">
              <div className="col-span-4">
                <EventsCarousel index={INDEX} slides={SLIDES} options={OPTIONS} />
              </div>
              <div className="col-span-2 h-full items-start justify-start">
                <div className="flex flex-col gap-y-3 text-start">
                  <p className="text-4xl font-extrabold">Join our events!</p>
                  <p>
                    <span className="font-medium text-lg">
                      Looking for something fun and meaningful to do? We've got a range of exciting events lined up, perfect for all interests!
                    </span>
                    <br></br>
                    <span className="font-light text-sm">
                      Whether you're into exploring diverse cultures, making new friends, or learning something new, there's always something for you here. Check out our upcoming events and find the one that suits your vibe. Don't miss out—join us and be part of the vibrant university community!
                    </span>
                  </p>
                  <a href="https://linktr.ee/Umsanz" target="_blank">
                    <div className="flex gap-x-4 items-center justify-center bg-white rounded-md p-3 scale-hover">
                      <p className="text-umsaBlue text-xl font-bold">upcoming events!</p>
                      <img className="h-6" src="/blue-arrow.svg"></img>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="absolute bottom-0 right-0 translate-y-2/3 -translate-x-2/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg"></img>
        </div>

      </Bounded>
    </div>
  );
};
