import React, { useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';
import Image from 'next/image';
import { IconButton } from "@material-tailwind/react";


const Main = () => {
	//const navbar = document.querySelector('.navbar');
	//let classList = navbar?.classList;

	//useEffect(() => {
	//	classList?.add('bg-black');
	//}, []);


	return (
		<>
		<div className='hidden lg:flex'>
		<ParticlesBackground />
		</div>
		<div className="h-[100vh] w-full flex justify-center items-center overflow-hidden height">
		<section className="absolute z-10 opacity-100 md:w-[500px] h-[250px] w-[250px] md:h-[500px] bg-[#021915] rounded-full notonscreen up">
			<Image src="/logo.png" className='absolute z-10 opacity-100 transition-all ease-in duration-[2s]' width={500} height={500} alt="logo" />
		</section>
			<a href='#who' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b]' data-scroll-to data-scroll-target="#who">
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down text-[#f7aa1b]"></i>
      		{/*</IconButton>*/}
			</a>
		</div>
		</>
	)
}

export default Main;