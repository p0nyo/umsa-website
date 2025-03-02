import Bounded from "../Bounded"

const FaqItems = [
    { question: "How do I become a member of UMSA?", answer: "Shoot an e-mail to our helpful communication officers at comm.umsanz@gmail.com and we will be more the merrier to help you get things sorted out. You can also sign up online! Simply click on this link, and follow the step-by-step guide, and you're good to go! During the first week of every new semester, catch our booth at the University of Auckland's club expo."},
    { question: "I'm not Malaysian, can I still join?", answer: "The more the merrier! You do not have to be a Malaysian to join the UMSA family. We happily welcome people from all cultures and backgrounds."},
    { question: "Does it cost to join UMSA?", answer: "The price to join UMSA is $7 - for both new and returning members."},
    { question: "I'm not a UOA student, can I still join?", answer: "Absolutely! In fact, invite any other friends outside of the University of Auckland to join the family as well!"},
    { question: "How do I find out or keep myself updated on UMSA's events?", answer: "Make sure to follow our social media platforms! Keep yourself updated by checking UMSA's website, Facebook and Instagram constantly. We will be updating you with up-coming events, opportunities and what is going on with the community."}
]

export default function Faq() {
    return(
        <div className="relative min-h-screen" id="faq">
            <Bounded>
                <div className="flex flex-col text-white justify-center">
                    <p className="text-7xl text-start mb-12">
                        <span className="font-normal transparent-y-gradient-sm whitespace-nowrap">frequently asked questions.</span>
                    </p>
                    <div className="grid grid-cols-2 gap-x-10">
                        {FaqItems.map((item) => (
                            <div className="py-4">
                                <p className="font-normal text-2xl pb-3">{item.question}</p>
                                <p className="font-extralight">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Bounded>
        </div>
    )
}