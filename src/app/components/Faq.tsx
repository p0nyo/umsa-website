import Bounded from "./Bounded"

export default function Faq() {
    return(
        <div className="relative" id="faq">
            <Bounded>
                <div className="flex min-h-screen text-white text-center justify-center">
                    <p className="text-8xl">
                        <span className="font-light">frequently asked questions</span>
                    </p>
                </div>
            </Bounded>
        </div>
    )
}