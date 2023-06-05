import React from "react";

const AboutUs = () => {
	return (
		<>
		<div className="h-[100vh] pt-[66px] flex z-[0] text-center bg-[#021915]" id="aboutus">
			<section className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:text-[350px] cursor-default" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
				WHO
			</section>
			{/*<div className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:hidden">
				WHO
			</div>*/}
		</div>
		<div className="h-[100vh] pt-[66px] flex z-[0] bg-[#021915]">
			<div className="w-full h-full flex flex-col justify-center items-center z-10 lg:pb-[10vh]">
				<div className="w-[90vw] h-full flex flex-col justify-center items-center mb-[60px] mt-[30px] text-white rounded-3xl">
					<div className="text-[#fff] font-bold text-[30px] lg:text-[50px] lg:pl-[5vw]" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5">
						Well, Hello There!
					</div>
					<div className="text-[#fff] font-bold text-[20px] lg:text-[40px] lg:pr-[5vw]" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5">
						Allow us to introduce ourselves...
					</div>
					<div className="w-[80%] lg:w-[50%] h-[50%] flex justify-center items-center text-[#fff] font-bold text-[12px] lg:text-[20px] notonscreen aboutustext">
						We are the YBL
A youth based organisation focused on sparking innovation
We are a turbocharged community where aspiring young entrepreneurs thrive! We inspire innovation and empower the next generation of business leaders.
We ignite the spark of inspiration and empower the next generation of visionary leaders. 
Join our league of game-changers and boundary-breakers rewriting the entrepreneurial saga. 
Be it creating a Revolution and Challenging the Status quo; Be it unleashing your potential, and turning your dreams into your reality... YBL is to provide fuel to the fire that burns within you every step of the way!
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default AboutUs;