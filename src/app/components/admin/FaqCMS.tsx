type FaqRequestType = {
    id: number;
    question: string;
    answer: string;
}

type FaqCMSProps = {
    faqData: FaqRequestType[];
}

export default function FaqCMS({faqData}: FaqCMSProps) {
    return (
        <div className="flex flex-col">
            {faqData.map((faq) => {
                return (
                    <div key={faq.id} className="flex flex-row">
                        <p>{faq.question}</p>
                        <p>{faq.answer}</p>
                    </div>
                )
            })}
        </div>
    )
}