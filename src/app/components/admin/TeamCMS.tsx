type TeamRequestType = {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: string;
}

type TeamCMSProps = {
    teamData: TeamRequestType[];
}

export default function TeamCMS({teamData}: TeamCMSProps) {
    return (
        <div className="flex flex-col">
            {teamData.map((team) => {
                return (
                    <div key={team.id} className="flex flex-row">
                        <p>{team.name}</p>
                        <p>{team.role}</p>
                        <p>{team.image}</p>
                        <p>{team.socials}</p>
                    </div>
                )
            })}
        </div>
    )
}