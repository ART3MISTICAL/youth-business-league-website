import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";


const Footer = () => {
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
		<div className={`relative ${isDesktop ? "h-[100vh]" : "min-h-[30vh]"}`} id="footer">
		<footer className="w-full bg-[#021915] p-8 absolute z-30 bottom-0 notonscreen up delay-0">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#021915] text-center md:justify-between">
        <img src="/logo.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#start"
              color="white"
              className="font-normal transition-colors hover:text-[#f7aa1b] focus:text-[#f7aa1b]"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#who"
              color="white"
              className="font-normal transition-colors hover:text-[#f7aa1b] focus:text-[#f7aa1b]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#vision"
              color="white"
              className="font-normal transition-colors hover:text-[#f7aa1b] focus:text-[#f7aa1b]"
            >
              Our Vision
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#what"
              color="white"
              className="font-normal transition-colors hover:text-[#f7aa1b] focus:text-[#f7aa1b]"
            >
              What We Do
            </Typography>
          </li>
		  <li>
            <Typography
              as="a"
              href="#contact"
              color="white"
              className="font-normal transition-colors hover:text-[#f7aa1b] focus:text-[#f7aa1b]"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 YOUTH BUSINESS LEAGUE
      </Typography>
    </footer>
		</div>
		</>
	)
}

export default Footer;