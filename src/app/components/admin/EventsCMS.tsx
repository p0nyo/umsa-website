import { useState } from "react";
import ImageUploader from "./ImageUploader";
import AdminSaveCancel from "./AdminSaveCancel";

type EventRequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
    new_image?: File;
    cloudinary_id?: string;
};

type EventCMSProps = {
    eventData: EventRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function EventsCMS({eventData, containerRef}: EventCMSProps) {
    const [event, setEvent] = useState<EventRequestType[]>(eventData)

    // Updater Functions

    const handleChange = (id: number, field: keyof EventRequestType, value: string) => {
        setEvent(prev =>
            prev.map(event =>
                event.id === id ? { ...event, [field]: value } : event
            )
        );
    };

    const handleFileSelect = (id: number, file: File) => {
        setEvent(prev =>
            prev.map(event =>
                event.id === id ? { ...event, image: URL.createObjectURL(file), new_image: file } : event
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
                            <p>preview image!</p>
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
                        <ImageUploader id={event.id} onFileSelect={(file: File) => handleFileSelect(event.id, file)}/>
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