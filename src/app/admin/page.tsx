"use client"


import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AdminCMS from "@/app/components/admin/AdminCMS";
import AdminHeader from "@/app/components/admin/AdminHeader";
import { useState, useEffect } from "react";
import FullPageLoadingSpinner from "../components/admin/FullPageLoadingSpinner";

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
}

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


export default function Admin() {
    const [landing, setLanding] = useState<LandingRequestType[]>([]);
    const [events, setEvents] = useState<EventRequestType[]>([]);
    const [team, setTeam] = useState<TeamRequestType[]>([]);
    const [faq, setFaq] = useState<FaqRequestType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useSession({
        required: true,
        onUnauthenticated() {
            redirect('api/auth/signin?callbackUrl=/admin');
        },
    })

    const getLanding = async () => {
        const response = await fetch('/api/get/landing');
        const data = await response.json();
        data.sort((a: LandingRequestType, b: LandingRequestType) => a.id - b.id);
        console.log("LANDING Table:");
        console.log(data);
        setLanding(data || []);   
    }

    const getEvents = async () => {
        const response = await fetch('/api/get/events');
        const data = await response.json();
        data.sort((a: EventRequestType, b: EventRequestType) => a.id - b.id);
        console.log("EVENTS Table:");
        console.log(data);
        setEvents(data || []);
    };

    const getTeam = async () => {
        const response = await fetch('/api/get/team');
        const data = await response.json();
        data.sort((a: TeamRequestType, b: TeamRequestType) => a.id - b.id);
        console.log("TEAM Table:");
        console.log(data);
        setTeam(data || []);
    }

    const getFaq = async () => {
        const response = await fetch('/api/get/faq');
        const data = await response.json();
        data.sort((a: FaqRequestType, b: FaqRequestType) => a.id - b.id);
        console.log("FAQ Table:");
        console.log(data);
        setFaq(data || []);   
    }

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                await Promise.all([
                    getLanding(),
                    getEvents(),
                    getTeam(),
                    getFaq()
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-full">
            {isLoading ? (
                <FullPageLoadingSpinner text="loading . . ." opacity={100}/>
            ) : (
                <>
                    <AdminHeader />
                    {landing.length > 0 && events.length > 0 && team.length > 0 && faq.length > 0 && (
                        <AdminCMS landingData={landing} eventData={events} teamData={team} faqData={faq} />
                    )}
                </>
            )}
        </div>
    )
}