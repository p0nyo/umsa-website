import { useState, useRef } from "react";
import ImageUploader from "./ImageUploader";
import toBase64 from "@/utils/toBase64";
import AdminSaveCancel from "./AdminSaveCancel";

type EventRequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
    new_image?: File;
    cloudinary_id?: string;
    deleted?: Boolean;
};

type EventCMSProps = {
    eventData: EventRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function EventsCMS({eventData, containerRef}: EventCMSProps) {
    const originalEvent = useRef<EventRequestType[]>([...eventData]);
    const [event, setEvent] = useState<EventRequestType[]>(eventData);
    const [increment, setIncrement] = useState<number>(0);

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

    // State Setter Functions

    const cancelEvents = () => {
        setEvent([...originalEvent.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    const addEvents = () => {
        console.log("add landing");
        setEvent(prev => [
            ...prev,
            {
                id: increment,
                title: "",
                image: "https://www.umsanz.com/event-pics/malaysian-mania-1.jpg",
                date: "",
                link: "",
            }
        ]);
        setIncrement(increment-1);

        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    const markEventAsDeleted = (id: number) => {
        setEvent(prev => 
            prev.map(event =>
                event.id === id ? { ...event, deleted: true } : event
            )
        );
    }

    // HTTP Requests to Cloudinary

    const batchUpdateImages = async (): Promise<EventRequestType[]> => {
        const updated = [...event];
        for (let i = 0; i < updated.length; i++) {
            const event = updated[i];
            if (event.new_image) {
                const data = await postImage(event.new_image);
                updated[i] = {
                    ...event,
                    image: data.url,
                    cloudinary_id: data.public_id,
                    new_image: undefined,
                };
            } else if (event.deleted && event.cloudinary_id) {
                await deleteImage(event.cloudinary_id);
            }
        }
        setEvent(updated);
        return updated;
    };

    const postImage = async(file: File) => {
        const base64Image = await toBase64(file);

        const response = await fetch('/api/post/cloudinary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            file: base64Image,
            resource_type: 'image',
            folder: 'event-page-images',
            }),
        });
        const data = await response.json();

        return data;
    };

    const deleteImage = async(public_id: string) => {
        await fetch('/api/delete/cloudinary', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                public_id: public_id,
                resource_type: 'image',
            }),
        });
    };

    // HTTP Requests to Database

    const putEvent = async(event: EventRequestType) => {
        await fetch('/api/put/events',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        console.log('PUT Request Successful');
    };

    const postEvent = async(event: EventRequestType) => {
        await fetch('/api/post/events',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event), 
        })
        console.log('POST Request Successful');
    };

    const deleteEvent = async(eventId: number) => {
        await fetch('/api/delete/events',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: eventId,
            }),
        })
        console.log('DELETE Request Successful');
    };

    const saveEvent = async() => {
        const updatedEvents = await batchUpdateImages();
        for (const event of updatedEvents) {
            if (event.deleted) {
                await deleteEvent(event.id);
            } else if (event.id <= 0) {
                await postEvent(event);
            } else {
                await putEvent(event);
            }
        }
        window.location.reload();
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
                        <div onClick={() => deleteEvent(event.id)} className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-36"></img>
                        </div>
                    </form>
                );
            })}
            <AdminSaveCancel onClickSave={saveEvent} onClickAdd={addEvents} onClickCancel={cancelEvents} />
        </div>
    )
}