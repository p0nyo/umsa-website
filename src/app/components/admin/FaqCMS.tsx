import { useEffect, useState } from "react";
import AdminSaveCancel from "./AdminSaveCancel";

type FaqRequestType = {
    id: number;
    question: string;
    answer: string;
}

type FaqCMSProps = {
    faqData: FaqRequestType[];
}

export default function FaqCMS({faqData}: FaqCMSProps) {
    const [faqs, setFaqs] = useState<FaqRequestType[]>(faqData);

    const handleChange = (id: number, field: keyof FaqRequestType, value: string) => {
        setFaqs(prev =>
            prev.map(faq =>
                faq.id === id ? { ...faq, [field]: value } : faq
            )
        );
    };

    // useEffect(() => {
    //     console.log(faqs);
    // },[faqs]);

    const saveFaqs = async() => {
        for (const faq of faqs) {
            await putFaq(faq);
        }
    };

    const putFaq = async(faq: FaqRequestType) => {
        await fetch('/api/put/faq',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(faq),
        })
        console.log('PUT Request Successful')
    };

    return (
        <div className="flex flex-col w-full">
            {faqs.map((faq) => {
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
                            />
                        </div>
                        <div className="flex items-center not-italic text-red-600 text-4xl">
                            x
                        </div>
                    </form>
                )
            })}
            <AdminSaveCancel onClick={saveFaqs}/>
        </div>
    )
}