
import { useState, useRef } from "react";
import LandingCMS from "./LandingCMS";
import EventsCMS from "./EventsCMS";
import TeamCMS from "./TeamCMS";
import FaqCMS from "./FaqCMS";

type TabType = 'landing' | 'events' | 'team' | 'faq';

type LandingRequestType = {
    id: number;
    image: string;
}

type EventRequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
};

type TeamRequestType = {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: string;
}

type FaqRequestType = {
    id: number;
    question: string;
    answer: string;
}

type AdminCMSProps = {
    landingData: LandingRequestType[];
    eventData: EventRequestType[];
    teamData: TeamRequestType[];
    faqData: FaqRequestType[];
}

const TABS: { label: string, value: TabType}[] = [
    { label: 'landing', value: 'landing' },
    { label: 'events', value: 'events' },
    { label: 'team', value: 'team' },
    { label: 'faq', value: 'faq' },
];

export default function AdminCMS({ landingData, eventData, teamData, faqData}: AdminCMSProps) {
    const [activeTab, setActiveTab] = useState<TabType>('landing');
    const containerRef = useRef<HTMLDivElement>(null!);

    return (
        <div className="relative flex flex-col justify-start items-center w-screen h-full">
            <div className="w-[1000px]">
                {TABS.map((tab) => (
                        <button
                        key={tab.value}
                        className={`w-44 px-4 py-2 italic font-semibold text-xl transition-colors duration-200 rounded-t-md ${
                            activeTab === tab.value
                            ? 'text-umsaBlue bg-white'
                            : 'text-white hover:text-umsaBlue bg-white bg-opacity-60'
                        } ${
                            tab.value === 'landing'
                            ? 'border-umsaBlue border-r-2'
                            : 'border-umsaBlue border-r-2 border-l-2'
                        }`}
                        onClick={() => setActiveTab(tab.value)}
                        >
                            <p>{tab.label}</p>
                        </button>
                ))}
            </div>
            <div ref={containerRef} className="h-[550px] w-[1000px] bg-white rounded-b-md rounded-tr-md overflow-y-scroll">
                {activeTab === 'landing' && <LandingCMS landingData={landingData} containerRef={containerRef} />}
                {activeTab === 'events' && <EventsCMS eventData={eventData}/>}
                {activeTab === 'team' && <TeamCMS teamData={teamData}/>}
                {activeTab === 'faq' && <FaqCMS faqData={faqData} containerRef={containerRef} />}
            </div>
        </div>
    )
}