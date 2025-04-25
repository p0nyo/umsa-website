import Link from "next/link";

export default function AdminHeader() {
    return (
        <div className="flex items-center justify-center text-white text-center pt-6 pb-12">
            <div className="justify-self-center scale-hover">
                <Link href="/">
                    <p className="font-bold leading-none">
                        <span className="text-6xl">umsa/admin</span>
                    </p>
                    <h1 className="text-xl font-light">new zealand</h1>
                </Link>
            </div>
        </div>
    )
}