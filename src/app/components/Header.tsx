"use client"
import { useState, useEffect, useRef } from 'react';

export default function Header() {

    const navbarRef = useRef(null);
    const [textColor, setTextColor] = useState('white'); // Default text color
    
    // Function to get the background color and calculate luminance
    const calculateLuminanceFromBackgroundColor = () => {
        if (navbarRef.current) {
        const bgColor = window.getComputedStyle(navbarRef.current).backgroundColor;
        const rgba = bgColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
        
        if (rgba) {
            const r = parseInt(rgba[1]);
            const g = parseInt(rgba[2]);
            const b = parseInt(rgba[3]);
            return getLuminance(r, g, b);
        }
        }
        return 0; // Return 0 if background color cannot be parsed
    };

    // Update the navbar text color based on the luminance
    const updateNavbarColorBasedOnBackground = () => {
        const luminance = calculateLuminanceFromBackgroundColor();
        if (luminance > 0.5) {
        setTextColor('black'); // Dark text if the background is light
        } else {
        setTextColor('white'); // Light text if the background is dark
        }
    };

    // Update color on scroll
    useEffect(() => {
        // Initial color update
        updateNavbarColorBasedOnBackground();

        // Update color on scroll
        const handleScroll = () => {
        updateNavbarColorBasedOnBackground();
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
    <div className="fixed left-0 right-0 z-50 py-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center text-white text-center gap-x-6">
            <div className="flex justify-end text-lg font-normal space-x-12 mx-4">
                <a href="#about" className="scale-hover">about</a>
                <a href="#events" className="scale-hover">events</a>
            </div>
            <div className="justify-self-center scale-hover">
                <a href="#landing">
                    <h1 className="text-3xl font-bold leading-none">umsa</h1>
                    <h1 className="text-xs font-light">new zealand</h1>
                </a>
            </div>
            <div className="flex justify-start text-lg font-normal space-x-12 mx-4">
                <a href="#team" className="scale-hover">our team</a>
                <a href="#footer" className="scale-hover">contact</a>
            </div>
        </div>
    </div>
    );
}