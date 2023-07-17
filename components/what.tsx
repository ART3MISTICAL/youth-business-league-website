import React from "react";
import WhatCarousel from "./carousel";

const items = [
	{
	  image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
	  title: 'Item 1',
	  description: 'Description for Item 1',
	},
	{
	  image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
	  title: 'Item 2',
	  description: 'Description for Item 2',
	},
	{
	  image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
	  title: 'Item 3',
	  description: 'Description for Item 3',
	},
  ];

const What = () => {
	return (
		<>
		<div className="h-[100vh] w-[100vw] relative items-center justify-center" id="what">
			<div className="relative z-10 text-center font-bold text-white text-[15vh] w-[100vw] lg:pt-[5vh]">
				<p className="notonscreen">
				What We Do
				</p>
			</div>
			<div className="flex w-[100vw] justify-center">
			<div className="relative z-10 w-[50vw] h-[30vh] notonscreen">
			<WhatCarousel items={items}/>
			</div>
			</div>
			
			<div className="absolute z-40 w-[100vw] h-[100vh] bottom-0 flex justify-center items-center">
			<a href='#footer' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b] hover:border-[#021915] hover:bg-[#f7aa1b] text-[#f7aa1b] hover:text-[#021915]'>
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down "></i>
      		{/*</IconButton>*/}
			</a>
			</div>
		</div>
		</>
	)
}

export default What;