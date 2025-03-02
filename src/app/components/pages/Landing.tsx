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
            ".landing-page-carousel", // target the image
            {
                x: 200,
                opacity: 0, // start fully transparent
            },
            {
                x: 0,
                opacity: 1, // end fully visible
                duration: 5, // animation duration in seconds
                ease: "power3.out", // easing function

            },
        )
            .fromTo(
                ".landing-page-umsa-globe", // target the image
                {
                scale: 2, // start position (100px below the current position)
                opacity: 0, // start fully transparent
                },
                {
                scale: 1,
                opacity: 0.8, // end fully visible
                duration: 7, // animation duration in seconds
                ease: "power3.out", // easing function
                onComplete: () => {
                    gsap.to(".landing-page-umsa-globe", {
                        delay: 0.5,    
                        scale: 1.04, // scale up to 1.04
                        opacity: 1, // opacity remains at 1
                        duration: 3, // duration for one pulse
                        repeat: -1, // repeat indefinitely
                        yoyo: true, // reverse the animation to create a pulse effect
                        ease: "ease-in-out", // smooth ease
                    });
                    },
                },
            )
            .fromTo(
                ".landing-page-header", // target the image
                {
                    opacity: 0, // start fully transparent
                },
                {
                    opacity: 1, // end fully visible
                    duration: 8, // animation duration in seconds
                    ease: "power3.out", // easing function
                },
                "-=6"
            )

            .fromTo(
                ".landing-page-arrow", // target the image
                {
                    opacity: 0, // start fully transparent
                },
                {
                    opacity: 1, // end fully visible
                    duration: 8, // animation duration in seconds
                    ease: "power3.out", // easing function
                },
                "-=8"
            );
      }, []);


    return(
        <div className="relative flex flex-col min-h-screen justify-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="relative w-full h-96">
                <img className="opacity-80 landing-page-umsa-globe pointer-events-none z-40 absolute inset-0 w-full h-full object-contain transparent-y-gradient" draggable="false" src="/umsa-globe1.svg" style={{ opacity: 0.8 }}/>
                <div className="landing-page-carousel absolute inset-0 flex items-center justify-center transparent-x-gradient">
                    <LandingCarousel slides={SLIDES} options={OPTIONS}/>
                </div>
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2  scale-hover">
                <a href="#about" className="animate-bounce-custom">
                    <img src="/arrow-down.svg" className="landing-page-arrow animate-bounce-custom"></img>
                </a>
            </div>
        </div>
    )
}