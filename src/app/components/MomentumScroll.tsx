"use client"

import { useEffect, useRef } from "react";

const MomentumScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollY = 0;

    const handleWheel = (e) => {
      scrollY += e.deltaY;
      container.scrollTo({ top: scrollY, behavior: "smooth" });
    };

    container.addEventListener("wheel", handleWheel);

    
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowY: 'auto' }}
    >
      <div ref={containerRef} className="text-white min-h-screen">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
};

export default MomentumScroll;
