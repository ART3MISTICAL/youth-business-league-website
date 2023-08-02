import React, { useEffect, useState } from "react";
import MobileCarousel from "./MobileCarousel";
import HoverCarousel from "./HoverCarousel";

const images = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
  '/img4.png',
  '/img5.png',
];

const What = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if the screen width is greater than a certain threshold (e.g., 768px for phone)
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Add a listener to handle window resize events
    window.addEventListener("resize", handleWindowResize);

    // Call handleWindowResize on initial render
    handleWindowResize();

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        className={`w-[100vw] relative items-center justify-center ${isDesktop ? "h-[100vh]" : "min-h-screen"}`}
        id="what"
        style={{ overflow: "hidden" }}
      >
        <div className={`relative z-10 text-center font-bold text-white w-[100vw] lg:pt-[5vh] ${isDesktop ? "text-[15vh]" : "text-4xl"}`}>
          {/* Use larger text for desktop and smaller text for mobile */}
          <p className="p-[10vh] notonscreen">What We Do</p>
        </div>
        <div className="flex w-[100vw] justify-center">
          <div className="relative z-10 w-[95vw] h-[30vh] notonscreen" style={{ height: "100%" }}>
            {isDesktop ? <HoverCarousel images={images} /> : <MobileCarousel images={images} />}
          </div>
        </div>

        
      </div>
    </>
  );
};

export default What;
