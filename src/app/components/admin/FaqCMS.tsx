import React, { useEffect, useState, useRef } from "react";
import AdminSaveCancel from "./AdminSaveCancel";

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

    const handleChange = (id: number, field: keyof FaqRequestType, value: string) => {
        setFaqs(prev =>
            prev.map(faq =>
                faq.id === id ? { ...faq, [field]: value } : faq
            )
        );
    };

    useEffect(() => {
        setFaqs(prev => 
            prev.map(faq => ({ ...faq, deleted: false }))
        );
    },[]);

    useEffect(() => {
        console.log(faqs);
        console.log(originalFaqs);
    },[faqs]);

    const saveFaqs = async() => {
        for (const faq of faqs) {
            if (faq.id <= 0) {
                console.log(faq.question);
                await postFaq(faq);
            } else if (faq.deleted == true){
                await deleteFaq(faq.id);
            } else {
                await putFaq(faq);
            }
        }
        window.location.reload();
    };

    const cancelFaqs = () => {
        setFaqs([...originalFaqs.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    }

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
    }
        
    const markFaqAsDeleted = (id: number) => {
        setFaqs(prev => 
            prev.map(faq =>
                faq.id === id ? { ...faq, deleted: true } : faq
            )
        );
    }; 

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


    return (
        <div className="flex flex-col w-full">
            {faqs.filter(faq => !faq.deleted).map((faq) => {
                return (
                    <form key={faq.id} className="flex flex-row w-full gap-x-6 p-10">
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Question</label>
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
                            <label className="text-xl font-bold block">Answer</label>
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