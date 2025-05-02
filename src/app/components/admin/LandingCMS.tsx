import AdminSaveCancel from "./AdminSaveCancel";
import { useState, useRef, useEffect } from "react";
import ImageUploader from "./ImageUploader";

type LandingRequestType = {
    id: number;
    image: string;
    new_image?: File;
}

type LandingCMSProps = {
    landingData: LandingRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function LandingCMS({landingData, containerRef}: LandingCMSProps) {
    const originalLanding = useRef<LandingRequestType[]>([...landingData]);
    const [landing, setLanding] = useState<LandingRequestType[]>(landingData);

    const handleChange = (id: number, field: keyof LandingRequestType, value: string) => {
        setLanding(prev =>
            prev.map(landing =>
                landing.id === id ? { ...landing, [field]: value } : landing
            )
        );
    };

    const handleFileSelect = (id: number, file: File) => {
        console.log("handle file select");
        setLanding(prev =>
            prev.map(landing =>
                landing.id === id ? { ...landing, image: URL.createObjectURL(file), new_image: file} : landing
            )
        );
    };
    
    const saveLanding = async() => {
        console.log("save landing");
    }

    const cancelLanding = () => {
        console.log("cancel landing");
        setLanding([...originalLanding.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    }

    const addLanding = () => {
        console.log("add landing");
    }


    return (
        <div className="flex flex-col h-full overflow-scroll">
            {landing.map((landing) => {
                return (
                    <form key={landing.id} className="flex flex-row w-full gap-x-8 px-10 py-4">
                        <a href={landing.image} className="w-1/3 scale-hover" target="_blank" draggable="false">
                            <img src={landing.image} className="rounded-md" draggable="false"></img>
                            <p>image preview</p>
                        </a>
                        <div className="flex flex-col w-full">
                            {landing.new_image ? (
                                <label className="text-xl font-bold block">Temporary Image Link</label>
                            ) : (
                                <label className="text-xl font-bold block">Current Image Link</label>
                            )}

                            <input
                                type="text"
                                id={`image-${landing.id}`}
                                name="image"
                                value={landing.image}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                readOnly
                                placeholder="Insert Image Link here . . ."
                            />
                        </div>
                        <ImageUploader onFileSelect={(file: File) => {
                            handleFileSelect(landing.id, file);
                        }}/>
                        <div className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-8"></img>
                        </div>
                    </form>
                );
            })}
            <AdminSaveCancel onClickSave={saveLanding} onClickAdd={addLanding} onClickCancel={cancelLanding}/>
        </div>
    )
}