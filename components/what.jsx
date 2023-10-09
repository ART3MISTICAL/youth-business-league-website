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
  return (
    <>
      <div
        className="w-[100vw] relative items-center justify-center min-h-screen lg:h-[100vh] overflow-hidden"
        id="what"
      >
        <div className="relative z-10 text-center font-bold text-white w-[100vw] lg:pt-[5vh] text-4xl lg:text-[15vh] ">
          <p className="p-[10vh] notonscreen">What We Do</p>
        </div>
        <div className="flex w-[100vw] justify-center">
          <div className="relative z-10 w-[95vw] h-[100%] notonscreen">
						<div className="hidden lg:flex">
            <HoverCarousel  images={images} />
						</div>
						<div className="lg:hidden">
						<MobileCarousel  images={images} />
						</div>
					</div>
        </div>

        
      </div>
    </>
  );
};

export default What;
