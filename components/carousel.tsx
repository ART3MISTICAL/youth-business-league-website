import { useState } from 'react';

type Item = {
	image: string;
	title: string;
	description: string;
  };
  
  type CarouselProps = {
	items: Item[];
  };
  

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative rounded-lg h-[30vh]">
      <img className="w-full h-[60vh] rounded-lg" src={items[activeIndex].image} alt={items[activeIndex].title}  />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-50 p-4">
          <h2 className="text-white text-2xl font-bold mb-2">{items[activeIndex].title}</h2>
          <p className="text-white">{items[activeIndex].description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between">
        <button
          className="text-white text-3xl font-bold p-2 bg-black bg-opacity-50 hover:bg-opacity-75"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="text-white text-3xl font-bold p-2 bg-black bg-opacity-50 hover:bg-opacity-75"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
