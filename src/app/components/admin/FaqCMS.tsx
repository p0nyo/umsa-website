import React, { useEffect, useState, useRef } from "react";
import AdminSaveCancel from "./AdminSaveCancel";
import FullPageLoadingSpinner from "./FullPageLoadingSpinner";

type FaqRequestType = {
    id: number;
    question: string;
    answer: string;
    deleted?: boolean;
}

type FaqCMSProps = {
    faqData: FaqRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function FaqCMS({faqData, containerRef}: FaqCMSProps) {
    const originalFaqs = useRef<FaqRequestType[]>([...faqData]);
    const [faqs, setFaqs] = useState<FaqRequestType[]>(faqData);
    const [increment, setIncrement] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    

    // Updater Functions

    const handleChange = (id: number, field: keyof FaqRequestType, value: string) => {
        setFaqs(prev =>
            prev.map(faq =>
                faq.id === id ? { ...faq, [field]: value } : faq
            )
        );
    };

    // State Setter Functions

    const cancelFaqs = () => {
        setFaqs([...originalFaqs.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    const addFaq = () => {
        setFaqs(prev => [
            ...prev,
            {
                id: increment,
                question: "",
                answer: "",
            }
        ]);
        setIncrement(increment-1);

        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };
        
    const markFaqAsDeleted = (id: number) => {
        setFaqs(prev => 
            prev.map(faq =>
                faq.id === id ? { ...faq, deleted: true } : faq
            )
        );
    }; 

    // HTTP Requests to Database

    const putFaq = async(faq: FaqRequestType) => {
        await fetch('/api/put/faq',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(faq),
        })
        console.log('PUT Request Successful');
    };

    const postFaq = async(faq: FaqRequestType) => {
        await fetch('/api/post/faq',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(faq), 
        })
        console.log('POST Request Successful');
    };

    const deleteFaq = async(faqId: number) => {
        await fetch('/api/delete/faq',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: faqId,
            }),
        })
        console.log('DELETE Request Successful');
    };

    const saveFaqs = async() => {
        try {
            setIsLoading(true);
            for (const faq of faqs) {
                if (faq.deleted) {
                    await deleteFaq(faq.id);
                } else if (faq.id <= 0){
                    await postFaq(faq);
                } else {
                    await putFaq(faq);
                }
            }
            window.location.reload();
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setFaqs(prev => 
            prev.map(faq => ({ ...faq, deleted: false }))
        );
    },[]);
    
    
    return (
        <div className="flex flex-col w-full">
            {isLoading && (
                <FullPageLoadingSpinner text="saving changes . . . " opacity={90} />
            )}
            {faqs.filter(faq => !faq.deleted).map((faq) => {
                return (
                    <form key={faq.id} className="flex flex-row w-full gap-x-6 p-10">
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">question</label>
                            <input
                                type="text"
                                id={`question-${faq.id}`}
                                name="question"
                                value={faq.question}
                                onChange={(e) => handleChange(faq.id, 'question', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write question here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">answer</label>
                            <textarea
                                id={`answer-${faq.id}`}
                                name="answer"
                                value={faq.answer}
                                onChange={(e) => handleChange(faq.id, 'answer', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write answer here . . ."
                            />
                        </div>
                        <div onClick={() => markFaqAsDeleted(faq.id)} className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-16"></img>
                        </div>
                    </form>
                )
            })}
            <AdminSaveCancel onClickSave={saveFaqs} onClickAdd={addFaq} onClickCancel={cancelFaqs}/>
        </div>
    )
}