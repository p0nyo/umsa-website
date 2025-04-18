"use client"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import getEvents from "../api/get-posts/route"

export default function signIn() {
    const [events, setEvents] = useState<any[]>([]);

    const handleClick = async () => {
        const data = await getEvents();
        setEvents(data || []);
    };

    return(
        <div className="relative flex flex-col min-h-screen justify-center items-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="flex-col justify-center items-center z-40 space-y-20">
                <img className="pointer-events-none sm:h-auto transparent-y-gradient" draggable="false" src="/umsa-globe1.svg"/>
                <div onClick={handleClick} className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">sign in with</p>
                    <img src="/google.svg"></img>
                </div>
                <div onClick={getEvents} className="bg-white rounded-md flex justify-center items-center">
                    {events.map((event, index) => (
                        <p key={index} className="text-umsaBlue text-2xl">{event.title}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}