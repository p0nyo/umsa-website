import Link from "next/link";

export default function AdminHeader() {
    return (
        <div className="relative w-full text-white">
            <div className="items-center justify-center text-white text-center pt-6 pb-12">
                <div className="flex flex-row gap-x-10 justify-self-center">
                    <div>
                        <p className="font-bold leading-none">
                            <span className="text-6xl">umsa/admin</span>
                        </p>
                        <h1 className="text-xl font-light">new zealand</h1>
                    </div>
                </div>
            </div>
            <Link className="absolute top-0 right-0 p-6 justify-center items-center scale-hover" href="/">
                <p className="font-semibold leading-none">
                    <span className="text-2xl">sign out</span>
                </p>
            </Link>
        </div>
        
    )
}