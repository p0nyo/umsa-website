"use client"
import { useState } from "react";

type RequestType = {
    id: number;
    title: string;
    image: string;
    date: string;
    link: string;
};

export default function SignIn() {

    return(
        <div className="relative flex flex-col min-h-screen justify-center items-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="flex-col justify-center items-center z-40 space-y-20">
                <img className="pointer-events-none sm:h-auto transparent-y-gradient" draggable="false" src="/umsa-globe1.svg"/>
                <div className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">sign in with</p>
                    <img src="/google.svg"></img>
                </div>
            </div>
        </div>
    )
}