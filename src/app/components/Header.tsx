
export default function Header() {
    return(
    <div className="fixed left-0 right-0 z-50 backdrop-blur-2xl py-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center text-white text-center gap-x-6">
            <div className="flex justify-end text-lg font-normal space-x-12 mx-4">
                <a href="#about" className="scale-hover">about</a>
                <a href="#events" className="scale-hover">events</a>
            </div>
            <div className="justify-self-center scale-hover">
                <a href="#landing">
                    <h1 className="text-3xl font-bold leading-none">umsa</h1>
                    <h1 className="text-xs font-light">new zealand</h1>
                </a>
            </div>
            <div className="flex justify-start text-lg font-normal space-x-12 mx-4">
                <a href="#team" className="scale-hover">our team</a>
                <a href="#footer" className="scale-hover">contact</a>
            </div>
        </div>
        {/* <div className="border-white border-t-2"></div> */}
    </div>
    );
}