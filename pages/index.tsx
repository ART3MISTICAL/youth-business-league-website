import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import Text from '@/components/text'
import AboutUs from '@/components/about'
import { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import AnimCursor from '@/components/AnimCursor'
import Vision from '@/components/vision'
import What from '@/components/what'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export default function Home() {
	const ref = useRef(null);

	const options = {
	  smooth: true,
	}

	const [isDesktop, setIsDesktop] = useState(true);


	useEffect (() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('onscreen');
				} 
			});
		})
		const hiddenElements = document.querySelectorAll('.notonscreen');
		hiddenElements.forEach(el => observer.observe(el));

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
	},[],)


  return (
	<>
	<Head>
		<title>
			Youth Business League
		</title>
	</Head>
	<AnimCursor/>
    <div className='bg-[#021915]'>
		{/*<section data-scroll-sticky data-scroll-target="#stick">*/}

		<section>
		<div id='start'>
				<Navbar />
		</div>

		{/*<div >
		<a href='#start' className='bg-white rounded-full fixed z-[100] w-20 h-20 bottom-5 flex justify-center items-center cursor-pointer notonscreen up right-10' data-scroll-to data-scroll-target="#start">
				<div>
					Up
				</div>
			</a>
		</div>*/}
	
		<Main/>
		
		</section>
		
		{/*<section data-scroll-section>*/}
			<AboutUs />
		{/*</section>*/}

		<section data-scroll-section>
			<Vision />
		</section>
		
		<section>
			<What />
		</section>

		<section className={`w-[100vw] flex justify-center items-center relative ${isDesktop ? "h-[100vh]" : "min-h-[60vh]"}`} id='contact'>
			<Contact />
			
		</section>

		<section>
			<Footer />
		</section>

		
		
	</div>
	</>
  )
}