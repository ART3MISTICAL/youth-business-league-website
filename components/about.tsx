import React from "react";

const AboutUs = () => {
	return (
		<>
		<section className="h-[100vh] flex z-[0] text-center bg-[#021915] relative justify-center" id="who">
			<div className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:text-[350px] cursor-default" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
				<div className="notonscreen">
				WHO
				</div>

				</div>
			
			<a href='#aboutus' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b] hover:border-[#021915] hover:bg-[#f7aa1b] text-[#f7aa1b] hover:text-[#021915]'>
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down "></i>
      		{/*</IconButton>*/}
			</a>
			
			{/*<div className="text-[#fff] font-bold flex flex-col justify-center items-center w-[100vw] text-[15vh] lg:hidden">
				WHO
			</div>*/}
		</section>
		<section>
		<div className="h-[100vh] flex z-[0] bg-[#021915]" id="aboutus">
			<div className="w-full h-full flex flex-col justify-center items-center z-10 relative">
				<div className="w-[90vw] h-full flex flex-col justify-center items-center mb-[60px] mt-[30px] text-white rounded-3xl">
					<div className="text-[#fff] font-bold text-[30px] lg:text-[50px] notonscreen">
						Well, Hello There!
					</div>
					<div className="text-[#fff] font-bold text-[20px] lg:text-[40px] notonscreen">
						Allow us to introduce ourselves...
					</div>
					<div className="w-[80%] lg:w-[50%] h-[50%] flex justify-center items-center text-[#fff] font-bold text-[12px] lg:text-[30px] notonscreen aboutustext flex-column">
						<div className="flex">
						We are the YBL
A youth based organisation focused on sparking innovation
We are a turbocharged community where aspiring young entrepreneurs thrive! We inspire innovation and empower the next generation of business leaders.
We ignite the spark of inspiration and empower the next generation of visionary leaders.
						</div>

					</div>
				</div>
				<a href='#vision' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b] hover:border-[#021915] hover:bg-[#f7aa1b] text-[#f7aa1b] hover:text-[#021915]'>
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down "></i>
      		{/*</IconButton>*/}
			</a>
			</div>
		</div>
		</section>
		</>
	)
}

export default AboutUs;