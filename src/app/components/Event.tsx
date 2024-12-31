import { KeyTextField } from "@prismicio/client";

interface EventProps {
    title: KeyTextField | null | undefined;
    time: string | null | undefined;
    date: string | null | undefined;
    location: string | null | undefined;
    instagram_link: string | null | undefined;
    form_link: string | null | undefined;
}

export default function Event({
    title,
    time,
    date,
    location,
    instagram_link,
    form_link,
}: EventProps) {
    return (
        <div className="flex flex-col my-10">
            <div className="flex w-full gap-x-5 bg-white rounded-md bg-opacity-20 py-4 px-4">
                <div className="flex-shrink-0 h-full">
                    <img className="h-16 w-auto" src="/umsa-globe1.svg"></img>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-4xl opacity-100 whitespace-nowrap">malaysian mania</p>
                    <p className="text-lg font-extraligh whitespace-nowrap">
                        <span>18.07.24</span>
                        <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                        <span>6pm</span>
                        <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                        <span>science bldg. 309-191&nbsp;&nbsp;&nbsp;</span>
                    </p>
                </div>
                <div className="flex flex-row w-full justify-end gap-x-2">
                    <a href="https://www.instagram.com/umsanz/" target="_blank" className="scale-hover">
                        <img className="h-full" src="/instagram.svg"></img>
                    </a>
                    <a href="https://www.instagram.com/umsanz/" target="_blank" className="scale-hover">
                        <img className="" src="/white-arrow.svg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}