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
    return (
        <div className="flex flex-col">
            {eventData.map((event) => {
                return (
                    <div key={event.id} className="flex flex-row">
                        <p>{event.title}</p>
                        <p>{event.date}</p>
                        <p>{event.image}</p>
                        <p>{event.link}</p>
                    </div>
                );
            })}
            {/* <AdminSaveCancel /> */}
        </div>
    )
}