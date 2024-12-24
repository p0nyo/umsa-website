
export default function Header() {
    return(
        <div className="">
            <div className="grid grid-cols-[1fr,auto,1fr] items-center text-white text-center">
                <div className="flex justify-end text-3xl font-semibold space-x-4 mx-4">
                    <p className="">about</p>
                    <p className="">events</p>
                </div>
                <div className="justify-self-center">
                    <h1 className="text-8xl font-bold leading-none">umsa</h1>
                    <h1 className="text-2xl font-light">new zealand</h1>
                </div>
                <div className="flex justify-start text-3xl font-semibold space-x-4 mx-4">
                    <p>our team</p>
                    <p>signup</p>
                </div>
            </div>
        </div>
    );
}