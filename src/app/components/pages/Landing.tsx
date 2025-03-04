"use client"

import LandingCarousel from "../LandingCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useEffect } from "react";
import gsap from "gsap";
import Header from "../Header";

const OPTIONS: EmblaOptionsType = { loop: true } 
const SLIDES = [
    "/landing-1.jpg",
    "/landing-2.jpg",
    "/landing-3.jpg",
    "/landing-4.jpg",
    "/landing-5.jpg"
]

export default function Landing() {
    useEffect(() => {

        const tl = gsap.timeline();
        tl.fromTo(
            ".landing-page-carousel", 
            {
                x: 800,
                opacity: 0, 
                visibility: "visible",
            },
            {
                x: 0,
                opacity: 1, 
                duration: 3, 
                ease: "power1.in", 

            },
        )
            .fromTo(
                ".landing-page-umsa-globe", 
                {
                scale: 2, 
                opacity: 0, 
                visibility: "visible",
                },
                {
                scale: 1,
                opacity: 0.8, 
                duration: 7, 
                ease: "power3.out", 
                onComplete: () => {
                    gsap.to(".landing-page-umsa-globe", {
                        delay: 0.5,    
                        scale: 1.04, 
                        opacity: 1, 
                        duration: 3, 
                        repeat: -1, 
                        yoyo: true, // reverse the animation to create a pulse effect
                        ease: "ease-in-out", 
                    });
                    },
                },
            )
            .fromTo(
                ".landing-page-header", 
                {
                    opacity: 0, 
                    visibility: "visible",
                },
                {
                    opacity: 1, 
                    duration: 8, 
                    ease: "power3.out", 
                },
                "-=6"
            )

            .fromTo(
                ".landing-page-arrow", 
                {
                    opacity: 0, 
                    visibility: "visible",
                },
                {
                    opacity: 1, 
                    duration: 8,
                    ease: "power3.out", 
                },
                "-=8"
            );
      }, []);


    return(
        <div className="relative flex flex-col min-h-screen justify-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="relative w-full h-96">
                <img className="landing-page-umsa-globe pointer-events-none z-40 absolute inset-0 w-full h-full object-contain transparent-y-gradient" draggable="false" src="/umsa-globe1.svg" style={{ opacity: 0.8 }}/>
                <div className="landing-page-carousel absolute inset-0 flex items-center justify-center transparent-x-gradient">
                    <LandingCarousel slides={SLIDES} options={OPTIONS}/>
                </div>
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2 scale-hover">
                <a href="#about" className="animate-bounce-custom">
                    <img src="/arrow-down.svg" className="landing-page-arrow animate-bounce-custom"></img>
                </a>
            </div>
        </div>
    )
}