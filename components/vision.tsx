import React, { useEffect } from "react";

const Vision = () => {

	useEffect (() => {
		document.addEventListener("mousemove", (e) => {
			//console.log('stuff is happening');
			var eye = document.querySelectorAll(".eye") as NodeListOf<HTMLElement>;
  			//console.log('eye', eye)
			eye.forEach(function (eye) {
  			let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
     		let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
  			var rad = Math.atan2(e.pageX - x, e.pageY - y);
  			var rot = (rad * (180 / Math.PI) * -1) + 180;
  			eye.style.transform = 'rotate(' + rot + 'deg)';
			})
		  
		})
	}, [], )

	return (
		<>
		<div className="h-[100vh] relative justify-center items-center flex flex-col" id="vision">
			<div className="text-center text-white font-bold bg-blend-overlay cursor-default text-[7vh] lg:text-[30vh] opacity-40 vision notonscreen absolute z-0">
				Our Vision
			</div>
			<section className="move-area">
  				<div className="flex items-center justify-center">
    			<div className='eye'></div>
    			<div className='eye'></div>
  				</div>
			</section>
		</div>
		</>
	)
}

export default Vision;