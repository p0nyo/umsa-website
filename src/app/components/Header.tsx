
export default function Header() {
    return(
    <div className="fixed left-0 right-0 z-50 backdrop-blur-2xl py-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center text-white text-center gap-x-6">
            <div className="flex justify-end text-2xl font-normal space-x-12 mx-4">
                <a href="#about">about</a>
                <a href="#events">events</a>
            </div>
            <div className="justify-self-center ">
                <a href="#landing">
                    <h1 className="text-5xl font-bold leading-none">umsa</h1>
                    <h1 className="text-base font-light">new zealand</h1>
                </a>
            </div>
            <div className="flex justify-start text-2xl font-normal space-x-12 mx-4">
                <a href="#team">our team</a>
                <a href="#footer">contact</a>
            </div>
        </div>
        {/* <div className="border-white border-t-2"></div> */}
    </div>
    );
}