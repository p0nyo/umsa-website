
export default function Header() {

    return(
    <div className="landing-page-header absolute left-0 right-0 z-50 py-4 pt-6 sm:pt-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center text-white text-center gap-x-2 sm:gap-x-4">
            <div className="flex justify-end text-md sm:text-lg font-normal space-x-6 sm:space-x-12 mx-4">
                <a href="#about" className="scale-hover">about</a>
                <a href="#events" className="scale-hover">events</a>
            </div>
            <div className="justify-self-center scale-hover">
                <a href="#landing">
                    <h1 className="text-3xl font-bold leading-none">umsa</h1>
                    <h1 className="text-xs font-light">new zealand</h1>
                </a>
            </div>
            <div className="flex justify-start text-md sm:text-lg font-normal space-x-6 sm:space-x-12 mx-4">
                <a href="#team" className="scale-hover">our team</a>
                <a href="#faq" className="scale-hover">faq</a>
            </div>
        </div>
    </div>
    );
}