import React from 'react';
import Navbar from '@/components/navbar'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import Head from 'next/head';

const OurTeam = () => {
	const ref = useRef(null);

	const options = {
	  smooth: true,
	}

	useEffect (() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('onscreen');
				} else {
					entry.target.classList.remove('onscreen');
				}
			});
		})
		const hiddenElements = document.querySelectorAll('.notonscreen');
		hiddenElements.forEach(el => observer.observe(el));
	},[],)


	return (
		<>
		<Head>
			<title>
				Our Team
			</title>
		</Head>
		<div className='bg-[#021915]'>
		<LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
		
		{/*<section data-scroll-sticky data-scroll-target="#stick">*/}
		<section data-scroll-section>
				<Navbar />
		</section>
		
		</main>
	</LocomotiveScrollProvider>
	</div>
		</>
	)
}

export default  OurTeam;