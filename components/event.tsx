import React, { useEffect, useRef, useState } from 'react';

const Event = () => {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    const hiddenElement = iframeRef.current;
    if (hiddenElement) {
      observer.observe(hiddenElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen absolute z-10 items-center justify-center">
      <div className='text-4xl font-bold text-white py-10 lg:text-[15vh]'>
        YBL 2023
      </div>

      <div ref={iframeRef} >
        {isVisible && (
          <iframe
		  className="w-[90vw] h-[60vw] lg:w-[45vw] lg:h-[25.3vw] lg:my-10"
            src="https://www.youtube.com/embed/R3YKhDep3bc?autoplay=1&mute=1&loop=1"
            title="Youth Business League Event"
            allowFullScreen
          />
        )}
      </div>

      <a
        href="https://drive.google.com/file/d/1FN-fexQDAYZN2i5G-DySmiRswhNh8oUP/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#F1C779] text-black font-bold py-2 px-4 rounded mt-4">
          Join Us
        </button>
      </a>
    </div>
  );
};

export default Event;
