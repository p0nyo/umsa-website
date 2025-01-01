
import { ArrowDown01Icon } from "hugeicons-react" 
import Bounded from "@/app/components/Bounded";

export default function About() {
  return (
    <div className="relative" id="about">
      <Bounded
        // className="text-white opacity bg-[url('/umsa-globe.svg')] bg-no-repeat bg-[length:auto_600px] bg-right-bottom overflow-visible"
        className="relative"
      >
      <div className="text-white min-h-screen flex flex-col p-10">
        <p className="text-9xl transparent-y-gradient">
          <span className="font-light">we are</span>
          <span className="font-bold">&nbsp;umsa.</span>
        </p>
        <div className="grid grid-cols-2 h-full flex-1 gap-x-10 z-10">
          <div className="flex flex-col gap-y-6 items-start justify-center">
            <div>
              <p className="text-lg font-extralight opacity-80 leading-loose text-justify">
                Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for students. From cultural events to social gatherings, we bring a piece of home to university life.
              </p>
            </div>
            <div className=""> 
              {/* <a href="https://www.instagram.com/umsanz/" target="_blank" className="scale-hover">
                <img src="/instagram.svg"></img>
              </a>
              <a href="https://www.facebook.com/umsanz/" target="_blank" className="scale-hover">
                <img src="/facebook.svg"></img>
              </a>
              <a href="mailto:comm.umsanz@gmail.com" className="scale-hover">
                <img src="/email.svg"></img>
              </a> */}
              <div className="flex w-full justify-end">
                <div className="flex gap-x-4 items-center justify-center bg-white rounded-sm px-4 py-2 opacity-60 hover:opacity-100 transition:transform duration-300">
                  <p className="text-umsaBlue text-3xl ">sign up now!</p>
                  <img className="h-6" src="/blue-arrow.svg"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="rounded-md" draggable="false" src="/about-image.jpg"></img>
          </div>
        </div>
        <img className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg"></img>
      </div>  
      </Bounded>
      <div className=" opacity-80 max-w-6xl mx-auto border-white border-2 rounded-md"></div>
    </div>
  );
};

