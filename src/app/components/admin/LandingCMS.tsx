import AdminSaveCancel from "./AdminSaveCancel";

type LandingRequestType = {
    id: number;
    image: string;
}

type LandingCMSProps = {
    landingData: LandingRequestType[];
}

export default function LandingCMS({landingData}: LandingCMSProps) {
    return (
        <div className="flex flex-col h-full overflow-scroll">
            {landingData.map((landing) => {
                return (
                    <div key={landing.id}>
                        {landing.image}
                    </div>
                );
            })}
            {/* <AdminSaveCancel /> */}
        </div>
    )
}