import { useRef, useState } from "react";
import AdminSaveCancel from "./AdminSaveCancel";

type TeamRequestType = {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: string;
    new_image?: File;
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


    return (
        <div className="flex flex-col">
            {team.map((team) => {
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
                            <label className="text-xl font-bold block">image link</label>
                            <textarea
                                id={`image-${team.id}`}
                                name="image"
                                value={team.image}
                                onChange={(e) => handleChange(team.id, 'image', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                                placeholder="Insert Image Link here . . ."
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
                        <div className="flex items-center not-italic text-red-600 text-4xl cursor-pointer scale-hover">
                            <img src="cross.svg" className="w-36"></img>
                        </div>
                    </form>
                )
            })}
            {/* <AdminSaveCancel />  */}
        </div>
    )
}