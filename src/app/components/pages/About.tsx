
import Bounded from "@/app/components/Bounded";

export default function About() {
  return (
    <div className="relative" id="about">
      <div className="absolute inset-0 bg-white"></div>
      <Bounded
        // className="text-white opacity bg-[url('/umsa-globe.svg')] bg-no-repeat bg-[length:auto_600px] bg-right-bottom overflow-visible"
        className="relative"
      >
      <div className="text-umsaBlue flex flex-col pb-10">
        <div className="flex justify-center sm:justify-start pb-6">
          <p className="text-5xl sm:text-9xl whitespace-nowrap">
            <span className="font-light">we are</span>
            <span className="font-bold">&nbsp;umsa.</span>
          </p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 h-full flex-1 gap-x-10 gap-y-10 z-10">
          <div className="flex flex-col gap-y-6 items-start justify-start">
            <div className="flex flex-col gap-y-6 justify-center sm:justify-start">
              <p className="text-xl sm:text-4xl text-center sm:text-start font-extrabold whitespace-nowrap">a home away from home.</p>
              <p className="flex flex-col text-center sm:text-start">
                <span className="font-medium text-sm sm:text-lg">Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for all students.&nbsp;</span>
                <br></br>
                <span className="font-light text-xs sm:text-sm">From cultural events to social gatherings, we bring a piece of home to your university life. Sign up below to join our club today!</span>
              </p>
            </div>
            <div className="flex w-full justify-center sm:justify-start">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTeGK0rsdPF3clfo82LVGL2kcxrc_JN9okTYGGXe98_2WRyQ/viewform" target="_blank">
                <div className="flex gap-x-4 items-center justify-center bg-umsaBlue rounded-md p-3 scale-hover">
                  <p className="text-white text-xl font-bold">join us here!</p>
                  <img className="h-6" src="/white-arrow.svg" alt=""></img>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="rounded-md" draggable="false" src="/about-image.JPG" alt="UMSA Group Photo"></img>
          </div>
        </div>
        {/* <img className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg" alt=""></img> */}
      </div>  
      </Bounded>
      {/* <div className=" opacity-80 max-w-6xl mx-auto border-white border-2 rounded-md"></div> */}
    </div>
  );
};

