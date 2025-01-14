import Bounded from "./Bounded"

export default function Faq() {
    return(
        <div className="relative" id="faq">
            <Bounded>
                <div className="flex text-white text-center justify-center">
                    <p className="text-5xl">
                        <span className="font-light whitespace-nowrap">frequently asked questions</span>
                    </p>
                </div>
            </Bounded>
        </div>
    )
}