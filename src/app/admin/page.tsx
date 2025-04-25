"use client"

import AdminCMS from "@/app/components/admin/AdminCMS";
import AdminHeader from "@/app/components/admin/AdminHeader";
import { useState, useEffect } from "react";

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
    
    const getLanding = async () => {
        const response = await fetch('/api/get/landing');
        const data = await response.json();
        console.log(data);
        setLanding(data || []);   
    }

    const getEvents = async () => {
        const response = await fetch('/api/get/events');
        const data = await response.json();
        setEvents(data || []);
    };

    const getTeam = async () => {
        const response = await fetch('/api/get/team');
        const data = await response.json();
        console.log(data);
        setTeam(data || []);
    }

    const getFaq = async () => {
        const response = await fetch('/api/get/faq');
        const data = await response.json();
        console.log(data);
        setFaq(data || []);   
    }

    useEffect(() => {
        getLanding();
        getEvents();
        getTeam();
        getFaq();
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <AdminHeader />
            {landing.length > 0 && events.length > 0 && team.length > 0 && faq.length > 0 && (
                <AdminCMS landingData={landing} eventData={events} teamData={team} faqData={faq} />
            )}
        </div>
    )
}