import Globe from "./Globe";

export default function Header() {
    return(
        <div className="">
            <div className="grid grid-cols-3 items-center text-white text-center">

                <div className="flex justify-end text-4xl font-semibold space-x-4">
                    <p className="">about</p>
                    <p className="">events</p>
                </div>

                <div className="justify-self-center w-fit">
                    <h1 className="text-9xl font-bold leading-none">umsa</h1>
                    <h1 className="text-4xl font-light">new zealand</h1>
                </div>

        
                <div className="flex justify-start text-4xl font-semibold space-x-4">
                    <p>our team</p>
                    <p>signup</p>
                </div>
            </div>

            
        </div>
    );
}