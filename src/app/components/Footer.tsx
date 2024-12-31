export default function Footer() {
    return(
        <div className="text-white" id="footer">
            <div className="grid grid-cols-4 p-4 gap-x-28">
                <div className="z-50 col-span-3 text-center inline-block transparent-y-gradient">
                    <img className="w-full" src="/umsa-footer-title.svg"></img>
                </div>
                <div className="flex w-full items-center col-span-1">
                    <div className="flex flex-col gap-y-4 text-2xl font-extralight text-left w-full">
                        <p>home</p>
                        <p>about</p>
                        <p>events</p>
                        <p>our team</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="grid grid-cols-3 gap-x-3"> 
                    <a href="https://www.instagram.com/umsanz/" target="_blank" className="scale-hover">
                    <img src="/instagram.svg"></img>
                    </a>
                    <a href="https://www.facebook.com/umsanz/" target="_blank" className="scale-hover">
                    <img src="/facebook.svg"></img>
                    </a>
                    <a href="mailto:comm.umsanz@gmail.com" className="scale-hover">
                    <img src="/email.svg"></img>
                    </a>
                </div>
            </div>
            <div className="border-white border-t-2 "></div>
            <div className="grid grid-cols-2">
                <p className="text-left px-4">all right reserved UMSA 2024.</p>
                <p className="text-right px-4">designed and developed by treyson.</p>
            </div>
        </div>
    );
}