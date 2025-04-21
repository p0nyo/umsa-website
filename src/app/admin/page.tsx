"use client"
// import AdminEvents from "../components/AdminEvents";
import AdminHeader from "../components/AdminHeader";
import getEvents from "../api/get-requests/route"
import { useState, useEffect } from "react";

type RequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
  };

export default function Admin() {
    const [events, setEvents] = useState<RequestType[]>([]);

    const handleClick = async () => {
        const data = await getEvents();
        setEvents(data || []);
    };
    useEffect(() => {
        handleClick();
    })

    return (
        <div>
            <AdminHeader />
            <div className="flex justify-center items-center">
                <div className="grid grid-rows-2 gap-y-2">
                    {events.map((event, index) => {
                        const formattedDate = new Date(event.date)
                            .toLocaleDateString("en-GB")
                            .split("/")
                            .reverse()
                            .map((part, index) => index === 0 ? part.slice(-2) : part)
                            .reverse()
                            .join(".");
                        return (
                            <div key={index} className="flex col-span-1 p-4 bg-white rounded-md justify-center items-center">
                                <p className="text-umsaBlue text-2xl">{event.title}</p>
                                <img src={event.image} className="h-10 w-10"></img>
                                <p>{formattedDate}</p>
                                <a href={event.link}>link to photos</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}