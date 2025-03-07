"use client"

import LandingCarousel from "../LandingCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useEffect } from "react";
import gsap from "gsap";
// import Header from "../Header";

const OPTIONS: EmblaOptionsType = { loop: true } 
const SLIDES = [
    "/landing-page-images/landing-1.jpg",
    "/landing-page-images/landing-2.jpg",
    "/landing-page-images/landing-3.JPG",
    "/landing-page-images/landing-4.jpg",
    "/landing-page-images/landing-5.jpg",
    "/landing-page-images/landing-6.jpg",
    "/landing-page-images/landing-7.jpg",
    "/landing-page-images/landing-8.jpg",
    "/landing-page-images/landing-9.jpg",
]

export default function Landing() {
    useEffect(() => {

        const tl = gsap.timeline();

        const isMobile = window.innerWidth <= 640;

        gsap.set("body", { overflow: "hidden" });

        if (isMobile) {
            tl.fromTo(
                ".landing-page-umsa-globe", 
                {
                scale: 0.4, 
                opacity: 0, 
                visibility: "visible",
                },
                {
                rotation: 360,
                opacity: 0.8, 
                duration: 2, 
                ease: "back.inOut",
                onComplete: () => {
                    gsap.set("body", { overflow: "auto" });
                    },
                },
            )
            .fromTo(
                ".landing-page-umsa-globe", 
                {
                scale: 0.4, 
                visibility: "visible",
                },
                {
                delay: 0.5,
                scale: 1,
                duration: 3, 
                ease: "power3.out", 
                onComplete: () => {
                    gsap.set("body", { overflow: "auto" });
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
                ".landing-page-placeholder",
                {
                opacity: 1,
                duration: 3,
                },{
                opacity: 0,
                duration: 3,
                ease: "power3.out", 
                },
                "-=3"
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
                "-=2"
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
        } else {
            tl.fromTo(
                ".landing-page-umsa-globe", 
                {
                scale: 0.4, 
                opacity: 0, 
                visibility: "visible",
                },
                {
                rotation: 360,
                opacity: 0.8, 
                duration: 2, 
                ease: "back.inOut",
                onComplete: () => {
                    gsap.set("body", { overflow: "auto" });
                    },
                },
            )
            .fromTo(
                ".landing-page-umsa-globe", 
                {
                scale: 0.4, 
                visibility: "visible",
                },
                {
                delay: 0.5,
                scale: 1,
                duration: 3, 
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
                ".landing-page-placeholder",
                {
                opacity: 1,
                duration: 3,
                },{
                opacity: 0,
                duration: 3,
                ease: "power3.out", 
                },
                "-=3"
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
                "-=2"
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
        }
      }, []);


    return(
        <div className="relative flex flex-col min-h-screen justify-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="flex justify-center items-center relative h-96 w-auto">
                <img className="landing-page-umsa-globe pointer-events-none z-40 h-80 sm:h-auto transparent-y-gradient" draggable="false" src="/umsa-globe1.svg" style={{ opacity: 0.8 }} alt=""/>
                {/* <img className="landing-page-umsa-globe pointer-events-none z-40 absolute top-0 right-1/2 translate-x-1/2 sm:translate-x-0 sm:top-0 sm:right-0 w-3/4 sm:w-full h-full object-contain transparent-y-gradient" draggable="false" src="/umsa-globe1.svg" style={{ opacity: 0.8 }}/> */}
                <div className="landing-page-carousel absolute inset-0 hidden xl:flex items-center justify-center transparent-x-gradient">
                    <LandingCarousel slides={SLIDES} options={OPTIONS}/>
                </div>
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -translate-y-12 sm:translate-y-0 scale-hover">
                <a href="#about" className="animate-bounce-custom">
                    <img src="/arrow-down.svg" className="landing-page-arrow animate-bounce-custom w-24 sm:w-full h-auto" alt=""></img>
                </a>
            </div>
            <div className="landing-page-placeholder absolute inset-0 bg-black">
                <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            </div>
        </div>
    )
}