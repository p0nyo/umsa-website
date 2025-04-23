'use client'
import Bounded from "../Bounded"
import { useState, useEffect } from "react"

type FaqRequestTypes ={
    id: number;
    question: string;
    answer: string;
}

export default function Faq() {
    const [faq, setFaq] = useState<FaqRequestTypes[]>([]);

    const getFaq = async () => {
        const response = await fetch('/api/get/faq');
        const data = await response.json();
        console.log(data);
        setFaq(data || []);
    }

    useEffect(() => {
        getFaq();
    }, []);
    

    return(
        <div className="relative min-h-screen" id="faq">
            <Bounded>
                <div className="flex flex-col text-white justify-center">
                    <p className="text-2xl sm:text-7xl text-center sm:text-start mb-12">
                        <span className="font-normal transparent-y-gradient-sm whitespace-nowrap">frequently asked questions.</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                        {faq.map((item, index) => (
                            <div key={index} className="py-4 text-center sm:text-start">
                                <p className="font-normal text-md sm:text-2xl pb-3">{item.question}</p>
                                <p className="font-extralight text-xs sm:text-sm">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Bounded>
        </div>
    )
}