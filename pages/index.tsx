import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import Text from '@/components/text'
import AboutUs from '@/components/about'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import Head from 'next/head'

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
    <div className='bg-[#021915]'>
	<LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
		
		{/*<section data-scroll-sticky data-scroll-target="#stick">*/}
		<section data-scroll-section>
				<Navbar />
		</section>
	
		<section data-scroll-section>
          <Main />
        </section>
		
		<section data-scroll-section>
			<AboutUs />
		</section>
		
		<section data-scroll-section>
			<Text />
		</section>
		
		</main>
	</LocomotiveScrollProvider>
	</div>
	</>
  )
}