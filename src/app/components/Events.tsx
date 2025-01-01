
import Bounded from "@/app/components/Bounded";
import Event from "@/app/components/Event"
import Footer from "@/app/components/Footer";


export default function Events() {
  return (
    <div className="relative" id="events">
      <Bounded
        className="relative text-white"
      >
        <div className="">

          <div>
            <p className="text-8xl transparent-y-gradient"> 
                <span className="font-light">
                    events by
                </span> 
                <span className="font-bold">
                    &nbsp;umsa. 
                </span>
            </p>
            <div className="flex flex-col justify-center items-center mt-6">
              <div className="grid grid-cols-3 items-center justify-center">
                  <div className="flex justify-center">
                    <div className="h-60 w-60">
                      <img className="rounded-sm object-cover h-full" src="/landing-1.jpg"></img>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-80 w-80">
                      <img className="rounded-sm object-cover h-full" src="/landing-2.jpg"></img>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-60 w-60">
                      <img className="rounded-sm object-cover h-full" src="/landing-3.jpg"></img>
                    </div>
                  </div>
              </div>
              <div className="flex w-full justify-end">
                <div className="flex gap-x-4 items-center justify-center bg-white rounded-sm px-4 py-2 opacity-60 hover:opacity-100 transition:transform duration-300">
                  <p className="text-umsaBlue text-3xl ">view all</p>
                  <img className="h-6" src="/blue-arrow.svg"></img>
                </div>
              </div>
            </div>
          </div>
          <span className="text-5xl text-white font-light transparent-y-gradient"> 
            upcoming...  
          </span>
          <Event />
          <Event />
          <img className="absolute bottom-0 right-0 translate-y-2/3 -translate-x-2/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg"></img>
        </div>

      </Bounded>
    </div>
  );
};
