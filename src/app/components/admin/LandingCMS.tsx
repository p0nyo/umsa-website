import AdminSaveCancel from "./AdminSaveCancel";
import { useState } from "react";
import ImageUploader from "./ImageUploader";

type LandingRequestType = {
    id: number;
    image: string;
}

type LandingCMSProps = {
    landingData: LandingRequestType[];
}

export default function LandingCMS({landingData}: LandingCMSProps) {
    const [landing, setLanding] = useState<LandingRequestType[]>(landingData);

    const handleChange = (id: number, field: keyof LandingRequestType, value: string) => {
        setLanding(prev =>
            prev.map(landing =>
                landing.id === id ? { ...landing, [field]: value } : landing
            )
        );
    };

    return (
        <div className="flex flex-col h-full overflow-scroll">
            {landing.map((landing) => {
                return (
                    <form key={landing.id} className="flex flex-row w-full gap-x-8 px-10 py-4">
                        <a href={landing.image} className="w-1/3 scale-hover" target="_blank" draggable="false">
                            <img src={landing.image} className="rounded-md" draggable="false"></img>
                            <p>click to zoom!</p>
                        </a>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">Image Link</label>
                            <input
                                type="text"
                                id={`image-${landing.id}`}
                                name="image"
                                value={landing.image}
                                onChange={(e) => handleChange(landing.id, 'image', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Insert Image Link here . . ."
                            />
                        </div>
                        <ImageUploader />
                        <div className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-8"></img>
                        </div>
                    </form>
                );
            })}
            {/* <AdminSaveCancel /> */}
        </div>
    )
}