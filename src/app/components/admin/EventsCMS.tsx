import { useState } from "react";
import AdminSaveCancel from "./AdminSaveCancel";

type EventRequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
};

type EventCMSProps = {
    eventData: EventRequestType[];
}

export default function EventsCMS({eventData}: EventCMSProps) {
    const [event, setEvent] = useState<EventRequestType[]>(eventData)

    const handleChange = (id: number, field: keyof EventRequestType, value: string) => {
        setEvent(prev =>
            prev.map(event =>
                event.id === id ? { ...event, [field]: value } : event
            )
        );
    };

    return (
        <div className="flex flex-col">
            {event.map((event) => {
                return (
                    <form key={event.id} className="flex flex-row w-full gap-x-6 p-10">
                        <a href={event.image} className="w-4/5 scale-hover" target="_blank" draggable="false">
                            <img src={event.image} className="rounded-md" draggable="false"></img>
                            <p>click to zoom!</p>
                        </a>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Title</label>
                            <input
                                type="text"
                                id={`title-${event.id}`}
                                name="title"
                                value={event.title}
                                onChange={(e) => handleChange(event.id, 'title', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write title here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Date</label>
                            <input
                                type="text"
                                id={`date-${event.id}`}
                                name="date"
                                value={event.date}
                                onChange={(e) => handleChange(event.id, 'date', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write answer here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Image Link</label>
                            <textarea
                                id={`image-${event.id}`}
                                name="image"
                                value={event.image}
                                onChange={(e) => handleChange(event.id, 'image', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Insert Image Link here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Event Link</label>
                            <textarea
                                id={`link-${event.id}`}
                                name="link"
                                value={event.link}
                                onChange={(e) => handleChange(event.id, 'link', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Insert Event Link here . . ."
                            />
                        </div>
                        <div className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-36"></img>
                        </div>
                    </form>
                );
            })}
            {/* <AdminSaveCancel /> */}
        </div>
    )
}