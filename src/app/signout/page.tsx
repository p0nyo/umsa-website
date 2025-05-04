"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOut() {
    const router = useRouter();

    const handleSignOut = () => {
        signOut({
          callbackUrl: "/signin",
        });
    };

    const handleCancel = () => {
        router.push("/admin"); 
    };
    return (
        <div className="relative flex flex-col min-h-screen justify-center items-center">
            <div className="flex flex-col gap-4 p-8 shadow-md rounded-lg bg-white text-umsaBlue w-[300px]">
                <h1 className="text-xl font-bold text-center">are you sure?</h1>
                <button onClick={handleSignOut} className="bg-umsaBlue text-white py-2 rounded hover:opacity-90 scale-hover">yes</button>
                <button onClick={handleCancel} className="bg-white border-2 border-umsaBlue text-umsaBlue py-2 rounded scale-hover">no</button>
            </div>
        </div>
    )
}