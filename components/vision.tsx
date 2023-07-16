import React, { useEffect } from "react";

const Vision = () => {



	return (
		<>
		<div className="h-[100vh] relative justify-center items-center flex flex-col" id="vision">
			<div className="text-center text-white font-bold bg-blend-overlay cursor-default text-[7vh] lg:text-[30vh] opacity-40 vision notonscreen absolute z-0">
				Our Vision
			</div>

			<div className="text-center text-white lg:text-[2vh] font-bold vision-1 notonscreen">
			Our vision is to transform India into a hub of entrepreneurial excellence, where young minds become catalysts for economic growth and social development.
			</div>

			<div className="text-center text-white lg:text-[2vh] font-bold vision-2 notonscreen">
				We strive to create an ecosystem that nurtures innovation, embraces diversity, and empowers the next generation of visionary leaders.
			</div>

			<a href='#what' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b] hover:border-[#021915] hover:bg-[#f7aa1b] text-[#f7aa1b] hover:text-[#021915]'>
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down "></i>
      		{/*</IconButton>*/}
			</a>

		</div>
		</>
	)
}

export default Vision;