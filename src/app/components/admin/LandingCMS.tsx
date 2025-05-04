import AdminSaveCancel from "./AdminSaveCancel";
import { useState, useRef } from "react";
import ImageUploader from "./ImageUploader";
import toBase64 from "@/utils/toBase64";
import FullPageLoadingSpinner from "./FullPageLoadingSpinner";

type LandingRequestType = {
    id: number;
    image: string;
    cloudinary_id?: string;
    new_image?: File;
    deleted?: boolean;
}

type LandingCMSProps = {
    landingData: LandingRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function LandingCMS({landingData, containerRef}: LandingCMSProps) {
    const originalLanding = useRef<LandingRequestType[]>([...landingData]);
    const [landings, setLandings] = useState<LandingRequestType[]>(landingData);
    const [increment, setIncrement] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Updater Functions

    const handleFileSelect = (id: number, file: File) => {
        setLandings(prev =>
            prev.map(landing =>
                landing.id === id ? { ...landing, image: URL.createObjectURL(file), new_image: file } : landing
            )
        );
    };

    // State Setter Functions

    const cancelLanding = () => {
        console.log("cancel landing");
        setLandings([...originalLanding.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    const addLanding = () => {
        console.log("add landing");
        setLandings(prev => [
            ...prev,
            {
                id: increment,
                image: "https://www.umsanz.com/landing-page-images/landing-2.jpg",
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

    const markLandingAsDeleted = (id: number) => {
        setLandings(prev => 
            prev.map(landings =>
                landings.id === id ? { ...landings, deleted: true } : landings
            )
        );
    };

    // HTTP Requests to Cloudinary

    const batchUpdateImages = async (): Promise<LandingRequestType[]> => {
        const updated = [...landings];
        for (let i = 0; i < updated.length; i++) {
            const landing = updated[i];
            if (landing.new_image) {
                const data = await postImage(landing.new_image);
                updated[i] = {
                    ...landing,
                    image: data.url,
                    cloudinary_id: data.public_id,
                    new_image: undefined,
                };
            } else if (landing.deleted && landing.cloudinary_id) {
                await deleteImage(landing.cloudinary_id);
            }
        }
        setLandings(updated);
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
            folder: 'landing-page-images',
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

    const putLanding = async(landing: LandingRequestType) => {
        await fetch('/api/put/landing',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(landing),
        })
        console.log('PUT Request Successful');
    };

    const postLanding = async(landing: LandingRequestType) => {
        await fetch('/api/post/landing',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(landing), 
        })
        console.log('POST Request Successful');
    };

    const deleteLanding = async(landingId: number) => {
        await fetch('/api/delete/landing',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: landingId,
            }),
        })
        console.log('DELETE Request Successful');
    };

    const saveLanding = async() => {
        try {
            setIsLoading(true);
            const updatedLandings = await batchUpdateImages();
            for (const landing of updatedLandings) {
                if (landing.deleted) {
                    await deleteLanding(landing.id);
                } else if (landing.id <= 0){
                    await postLanding(landing);
                } else {
                    await putLanding(landing);
                }
            }
            window.location.reload();
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect(() => {
    //     console.log(landings);
    // },[landings]);

    return (
        <div className="flex flex-col h-full overflow-scroll">
            {isLoading && (
                <FullPageLoadingSpinner text="saving changes . . . " opacity={90} />
            )}
            {landings.filter(landing => !landing.deleted).map((landing, index) => {
                return (
                    <form key={index} className="flex flex-row w-full gap-x-8 px-10 py-4">
                        <a href={landing.image} className="w-1/3 scale-hover" target="_blank" draggable="false">
                            <img src={landing.image} className="rounded-md" draggable="false"></img>
                            <p>preview image!</p>
                        </a>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">
                                {landing.new_image ? (
                                    "temporary image link"
                                ) : (
                                    "current image link"
                                )}
                            </label>

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
                        <ImageUploader id={landing.id} onFileSelect={(file: File) => handleFileSelect(landing.id, file)}/>
                        <div onClick={() => markLandingAsDeleted(landing.id)} className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-12"></img>
                        </div>
                    </form>
                );
            })}
            <AdminSaveCancel onClickSave={saveLanding} onClickAdd={addLanding} onClickCancel={cancelLanding}/>
        </div>
    )
}