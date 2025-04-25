type LandingRequestType = {
    id: number;
    image: string;
}

type LandingCMSProps = {
    landingData: LandingRequestType[];
}

export default function LandingCMS({landingData}: LandingCMSProps) {
    return (
        <div>
            {landingData.map((landing) => {
                return (
                    <div key={landing.id}>
                        {landing.image}
                    </div>
                );
            })}
        </div>
    )
}