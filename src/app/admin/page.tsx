"use client"
// import AdminEvents from "../components/AdminEvents";
import AdminHeader from "../components/AdminHeader";
import { useState, useEffect } from "react";

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

export default function Admin() {
    const [events, setEvents] = useState<EventRequestType[]>([]);
    const [team, setTeam] = useState<TeamRequestType[]>([]);
    
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

    useEffect(() => {
        getEvents();
        getTeam();
    }, [])

    return (
        <div>
            <AdminHeader />
            <div className="flex justify-center items-center">
                <div className="grid grid-rows-2 gap-y-2">
                    {events.map((event, index) => {
                        return (
                            <div key={index} className="flex col-span-1 p-4 bg-white rounded-md justify-center items-center">
                                <p className="text-umsaBlue text-2xl">{event.title}</p>
                                <img src={event.image} className="h-10 w-10"></img>
                                <p>{event.date}</p>
                                <a href={event.link}>link to photos</a>
                            </div>
                        );
                    })}
                </div>
                <div className="grid grid-rows-2 gap-y-2">
                    {team.map((team, index) => {
                        return (
                            <div key={index} className="flex col-span-1 p-4 bg-white rounded-md justify-center items-center">
                                <p className="text-umsaBlue text-2xl">{team.name}</p>
                                <img src={team.image} className="h-10 w-10"></img>
                                <a href={team.socials}>link to socials</a>
                                <a href={team.image}>link to photos</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}