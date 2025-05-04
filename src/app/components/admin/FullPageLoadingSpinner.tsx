
type FullPageLoadingSpinnerProps = {
    text: string;
    opacity: number;
}

export default function FullPageLoadingSpinner({ text, opacity }: FullPageLoadingSpinnerProps) {
    return(
        <div className={`fixed top-0 left-0 z-50 w-screen h-screen bg-white bg-opacity-${opacity} flex flex-col items-center justify-center`}>
            <div className="w-12 h-12 border-4 border-gray-300 border-t-umsaBlue rounded-full animate-spin"></div>
            <div className="text-umsaBlue text-2xl font-bold">{text}</div>
        </div>
    )
}