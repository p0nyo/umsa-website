"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await signIn("credentials", {
        username,
        password,
        callbackUrl: "/admin", 
      });
    };


    return(
        <div className="relative flex flex-col min-h-screen justify-center items-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="flex-col justify-center items-center z-40 space-y-6">
                <img className="pointer-events-none sm:h-auto transparent-y-gradient" draggable="false" src="/umsa-globe1.svg" alt="umsa globe"/>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 shadow-md rounded-lg border-4 border-umsaBlue bg-white text-umsaBlue">
                    <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border px-4 py-2"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-4 py-2"
                    />
                    <button
                    type="submit"
                    className="bg-umsaBlue text-white py-2 rounded hover:opacity-90 scale-hover"
                    >
                    sign in
                    </button>
                </form>
            </div>
        </div>
    )
}