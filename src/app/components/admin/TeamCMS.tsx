import { useRef, useState } from "react";
import AdminSaveCancel from "./AdminSaveCancel";
import toBase64 from "@/utils/toBase64";
import ImageUploader from "./ImageUploader";

type TeamRequestType = {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: string;
    new_image?: File;
    cloudinary_id?: string;
    deleted?: Boolean;
}

type TeamCMSProps = {
    teamData: TeamRequestType[];
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function TeamCMS({teamData, containerRef}: TeamCMSProps) {
    const originalTeam = useRef<TeamRequestType[]>([...teamData]);
    const [team, setTeam] = useState<TeamRequestType[]>(teamData);
    const [increment, setIncrement] = useState<number>(0);

    // Updater Functions

    const handleChange = (id: number, field: keyof TeamRequestType, value: string) => {
        setTeam(prev =>
            prev.map(team =>
                team.id === id ? { ...team, [field]: value } : team
            )
        );
    };

    const handleFileSelect = (id: number, file: File) => {
        setTeam(prev =>
            prev.map(team =>
                team.id === id ? { ...team, image: URL.createObjectURL(file), new_image: file } : team
            )
        );
    };

    // State Setter Functions

    const cancelTeam = () => {
        setTeam([...originalTeam.current]);
        setTimeout(() => {
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    const addTeam = () => {
        console.log("add landing");
        setTeam(prev => [
            ...prev,
            {
                id: increment,
                name: "",
                role: "",
                image: "https://www.umsanz.com/comm-pics/comms-1.jpg",
                socials: "",
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
        setTeam(prev => 
            prev.map(team =>
                team.id === id ? { ...team, deleted: true } : team
            )
        );
    };

    // HTTP Requests to Cloudinary

    const batchUpdateImages = async (): Promise<TeamRequestType[]> => {
        const updated = [...team];
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
        setTeam(updated);
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
            folder: 'team-page-images',
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

    const putTeam = async(team: TeamRequestType) => {
        await fetch('/api/put/team',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(team),
        })
        console.log('PUT Request Successful');
    };

    const postTeam = async(team: TeamRequestType) => {
        await fetch('/api/post/team', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(team),
        })
        console.log("POST Request Successful");
    };

    const deleteTeam = async(teamId: number) => {
        await fetch('/api/delete/team', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: teamId,
            }),
        })
        console.log("DELETE Request Successful");
    };

    const saveTeam = async() => {
        const updatedTeam = await batchUpdateImages();
        for (const team of updatedTeam) {
            if (team.deleted) {
                await deleteTeam(team.id);
            } else if (team.id <= 0) {
                await postTeam(team);
            } else {
                await putTeam(team);
            }
        }
        window.location.reload();
    };


    return (
        <div className="flex flex-col">
            {team.filter(team => !team.deleted).map((team) => {
                return (
                    <form key={team.id} className="flex flex-row w-full gap-x-6 p-10">
                        <a href={team.image} className="w-4/5 scale-hover" target="_blank" draggable="false">
                            <img src={team.image} className="rounded-md" draggable="false"></img>
                            <p>preview image!</p>
                        </a>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">name</label>
                            <input
                                type="text"
                                id={`name-${team.id}`}
                                name="name"
                                value={team.name}
                                onChange={(e) => handleChange(team.id, 'name', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write name here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">role</label>
                            <input
                                type="text"
                                id={`role-${team.id}`}
                                name="role"
                                value={team.role}
                                onChange={(e) => handleChange(team.id, 'role', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Write role here . . ."
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl font-bold block">socials link</label>
                            <textarea
                                id={`socials-${team.id}`}
                                name="socials"
                                value={team.socials}
                                onChange={(e) => handleChange(team.id, 'socials', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Insert Socials Link here . . ."
                            />
                        </div>
                        <ImageUploader id={team.id} onFileSelect={(file: File) => handleFileSelect(team.id, file)}/>
                        <div onClick={() => markEventAsDeleted(team.id)} className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-36"></img>
                        </div>
                    </form>
                )
            })}
            <AdminSaveCancel onClickAdd={addTeam} onClickCancel={cancelTeam} onClickSave={saveTeam} /> 
        </div>
    )
}