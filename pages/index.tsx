import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import Text from '@/components/text'
import AboutUs from '@/components/about'
import { useEffect, useRef } from "react";
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
		
		<section data-scroll-section>
			<What />
		</section>

		<section className='w-[100vw] h-[100vh] flex justify-center items-center relative' id='contact'>
			<Contact />
			<div className=" z-50 w-[100vw] bottom-0 flex justify-center items-center">
			<a href='#footer' className='bg-[#021915] rounded-full absolute z-10 w-16 h-16 bottom-5 flex justify-center items-center cursor-pointer notonscreen up border-[1.5px] border-[#f7aa1b] hover:border-[#021915] hover:bg-[#f7aa1b] text-[#f7aa1b] hover:text-[#021915]'>
			{/*<IconButton color="blue" size="lg" variant="gradient" className="rounded-full absolute z-10 w-20 h-20 bottom-5">*/}
				<i className="fa-sharp fa-solid fa-arrow-down "></i>
      		{/*</IconButton>*/}
			</a>
			</div>
		</section>

		<section>
			<Footer />
		</section>

		
		
	</div>
	</>
  )
}