import React from "react";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false
  });

export default function AnimCursor() {
  return (
    //<div className="App">
      <AnimatedCursor 
	  innerSize={0}
      outerSize={15}
      color='247, 170, 27'
      outerAlpha={1}
      innerScale={0.7}
      outerScale={5}
	  trailingSpeed={15}
	  showSystemCursor={true}
      clickables={[
        '.link'
      ]}
	  />
    //</div>
  );
}