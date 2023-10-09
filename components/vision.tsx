import React, { useEffect, useState } from "react";

const Vision = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("onscreen");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".notonscreen");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative justify-center items-center flex flex-col lg:h-[100vh]" id="vision">
        <div className="hidden lg:block text-center text-white font-bold bg-blend-overlay cursor-default text-[7vh] lg:text-[30vh] opacity-40 vision notonscreen absolute z-0">
          Our Vision
        </div>

        <div className="lg:hidden flex flex-col justify-center items-center rounded-3xl p-6 bg-[#021915] notonscreen border-4 border-white max-w-[90%] mt-20">
          <h2 className="text-4xl text-white font-bold mb-4">Our Vision</h2>
          <p className="text-white text-lg text-center">
            Our vision is to transform India into a hub of entrepreneurial excellence,
            where young minds become catalysts for economic growth and social development.
          </p>
        </div>

        <div className="hidden lg:flex text-center text-white lg:text-2xl font-bold vision-1 notonscreen">
          Our vision is to transform India into a hub of entrepreneurial excellence,
        </div>

        <div className="hidden lg:flex text-center text-white lg:text-2xl font-bold vision-2 notonscreen">
          where young minds become catalysts for economic growth and social development.
        </div>

        
      </div>
    </>
  );
};

export default Vision;
