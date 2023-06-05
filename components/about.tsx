import React from "react";

const AboutUs = () => {
	return (
		<>
		<div className="h-[100vh] pt-[66px] flex z-[0] text-center" id="aboutus">
			<section className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:text-[350px]" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
				WHO
			</section>
			{/*<div className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:hidden">
				WHO
			</div>*/}
		</div>
		<div className="h-[100vh] pt-[66px] flex z-[0]">
			<div className="w-full h-full flex flex-col justify-center items-center z-10">
				<div className="w-[90vw] h-full flex flex-col justify-center items-center mb-[60px] mt-[30px] bg-white rounded-3xl">
					About Us
				</div>
			</div>
		</div>
		</>
	)
}

export default AboutUs;