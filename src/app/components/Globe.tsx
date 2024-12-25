import { ArrowDown01Icon } from "hugeicons-react"

export default function Globe() {
    return(
        <div className="flex min-h-screen justify-center items-center">
            <div className="relative w-full h-96">
                {/* <p className="absolute text-center text-white font-extralight text-5xl tracking-widest">a home away from home.</p> */}
                <img className="z-50 absolute inset-0 w-full h-full object-contain animate-pulse-scale" src="/umsa-globe1.svg"/>
                <div className="absolute inset-0 grid place-items-center">
                    <div className="z-0 opacity-50 grid grid-cols-4 gap-3 transparent-x-gradient">
                        <div className="w-80 h-64">
                            <img className="rounded-md object-cover w-full h-full" src="/landing-1.jpg"></img>
                        </div>
                        <div className="w-80 h-64">
                            <img className="rounded-md object-cover w-full h-full" src="/landing-2.jpg"></img>
                        </div>
                        <div className=" w-80 h-64">
                            <img className="rounded-md object-cover w-full h-full" src="/landing-3.jpg"></img>
                        </div>
                        <div className=" w-80 h-64">
                            <img className="rounded-md object-cover w-full h-full" src="/landing-4.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}