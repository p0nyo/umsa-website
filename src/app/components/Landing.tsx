import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true } 
const SLIDES = [
    "/landing-1.jpg",
    "/landing-2.jpg",
    "/landing-3.jpg",
    "/landing-4.jpg",
    "/landing-5.jpg"
]

export default function Landing() {
    return(
        <div className="relative flex flex-col min-h-screen justify-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="relative w-full h-96">
                {/* <p className="absolute text-center text-white font-extralight text-5xl tracking-widest">a home away from home.</p> */}
                <img className="pointer-events-none z-40 absolute inset-0 w-full h-full object-contain animate-pulse-scale transparent-y-gradient" draggable="false" src="/umsa-globe1.svg"/>
                <div className="absolute inset-0 flex items-center justify-center transparent-x-gradient">
                    {/* <div className="grid grid-cols-4 gap-3 opacity-50 transparent-x-gradient overflow-visible">
                        <div className="w-80 h-64 relative overflow-visible">
                            <img className="rounded-md object-cover w-full h-full" draggable="false" src="/landing-1.jpg"></img>
                        </div>
                        <div className="w-80 h-64 overflow-y-visible">
                            <img className="rounded-md object-cover w-full h-full" draggable="false" src="/landing-2.jpg"></img>
                        </div>
                        <div className=" w-80 h-64 overflow-y-visible">
                            <img className="rounded-md object-cover w-full h-full" draggable="false" src="/landing-3.jpg"></img>
                        </div>
                        <div className=" w-80 h-64 overflow-y-visible">
                            <img className="rounded-md object-cover w-full h-full" draggable="false" src="/landing-4.jpg"></img>
                        </div>
                    </div> */}
                    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
                </div>
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2  scale-hover">
                <a href="#about" className="animate-bounce-custom">
                    <img src="/arrow-down.svg" className="animate-bounce-custom"></img>
                </a>
            </div>
        </div>
    )
}