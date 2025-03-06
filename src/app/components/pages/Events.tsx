
import Bounded from "@/app/components/Bounded";
import Event from "@/app/components/Event"
import EventsCarousel from "../EventsCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true,  } 
const SLIDES = [
  { src: "/event-pics/malaysian-mania-1.jpg", name: "malaysian mania", date: "04.05.24", link: "https://www.facebook.com/media/set/?set=a.852368486914844&type=3"},
  { src: "/event-pics/bersatu-team-bonding-1.jpg", name: "bersatu team bonding", date: "27.04.24", link: "https://www.facebook.com/media/set/?set=a.849722403846119&type=3"},
  { src: "/event-pics/bersatu-vic-dinner-1.jpg", name: "bersatu victory dinner", date: "12.08.24", link: "https://www.facebook.com/media/set/?set=a.932065372278488&type=3"},
  { src: "/event-pics/bowling-1.jpg", name: "malaysia bowl-eh", date: "17.08.24", link: "https://www.facebook.com/media/set/?set=a.935699345248424&type=3"},
  { src: "/event-pics/hari-raya-1.jpg", name: "hari raya", date: "21.04.24", link: "https://www.facebook.com/media/set/?set=a.849718833846476&type=3"},
  { src: "/event-pics/makan-night-1.jpg", name: "makan night", date: "05.10.24", link: "https://www.facebook.com/media/set/?set=a.978074094344282&type=3"},
  { src: "/event-pics/malaysian-day-1.jpg", name: "malaysian day", date: "16.09.24", link: "https://www.facebook.com/media/set/?set=a.963076405844051&type=3"},
  { src: "/event-pics/speed-friending-1.jpg", name: "speed friending", date: "23.03.24", link: "https://www.facebook.com/media/set/?set=a.822598359891857&type=3"},
  { src: "/event-pics/sports-day-1.jpg", name: "UMSA x UABC", date: "03.07.24", link: "https://www.facebook.com/media/set/?set=a.925451169606575&type=3"},
  { src: "/event-pics/sports-orientation-1.jpg", name: "orientation x sports", date: "09.03.24", link: "https://www.facebook.com/media/set/?set=a.820986293386397&type=3"},
  { src: "/event-pics/yap-night-1.jpg", name: "yap night", date: "18.07.24", link: "https://www.facebook.com/media/set/?set=a.905493061602386&type=3"}
]
const SLIDE_COUNT = SLIDES.length
const INDEX = Array.from(Array(SLIDE_COUNT).keys())

export default function Events() {
  return (
    <div className="relative bg-starImg bg-cover h-auto sm:min-h-screen" id="events">
      <div className="absolute inset-0 bg-blueOverlay opacity-65"></div>
      <Bounded
        className="relative text-white"
      >
        <div>
          <p className="text-4xl sm:text-8xl text-center sm:text-start transparent-y-gradient pb-6 sm:pb-16"> 
              <span className="font-light">
                  events by
              </span> 
              <span className="font-bold">
                  &nbsp;umsa. 
              </span>
          </p>
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-6 gap-x-10 gap-y-6 sm:gap-y-0 justify-center items-center">
            <div className="sm:col-span-4">
              <EventsCarousel index={INDEX} slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="sm:col-span-2 h-full items-start justify-start">
              <div className="flex flex-col gap-y-3 text-start">
                <p className="text-4xl font-extrabold hidden sm:block">Join our events!</p>
                <p className="flex flex-col text-center sm:text-start">
                  <span className="font-medium text-sm sm:text-lg">
                    Looking for something fun and meaningful to do? We've got a range of exciting events lined up, perfect for all interests!
                  </span>
                  <br></br>
                  <span className="font-light text-xs sm:text-sm">
                    Whether you're into exploring diverse cultures, making new friends, or learning something new, there's always something for you here. Check out our upcoming events and find the one that suits your vibe.
                  </span>
                </p>
                <div className="flex w-full justify-center sm:justify-start">
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
        </div>
        <img className="absolute bottom-0 right-0 translate-y-2/3 -translate-x-2/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg"></img>
      </Bounded>
    </div>
  );
};
