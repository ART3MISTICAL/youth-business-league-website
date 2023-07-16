import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();

 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nnav notonscreen"
      >
        <a href="#start" className="flex items-center nav_link cursor-pointer" data-scroll-to data-scroll-target="#start">
          HOME
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nnav notonscreen"
      >
        <a href="#who" className="flex items-center nav_link cursor-pointer" data-scroll-to data-scroll-target="#who">
          ABOUT US
        </a>
      </Typography>

	  <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nnav notonscreen"
      >
        <a href="#vision" className="flex items-center nav_link cursor-pointer" data-scroll-to data-scroll-target="#vision">
          OUR VISION
        </a>
      </Typography>

	  <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nnav notonscreen"
      >
        <a href="#what" className="flex items-center nav_link cursor-pointer" data-scroll-to data-scroll-target="#who">
          WHAT WE DO
        </a>
      </Typography>
	  {/*<Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center nav_link">
          WHAT WE DO
        </a>
      </Typography>*/}
      
      {/*<Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center nav_link">
          CONTACT US
        </a>
      </Typography>*/}
    </ul>
  );

  let classes = 'sticky inset-0 z-[10] bg-[#021915] w-[100%] navbar'
  let classes2 = "sticky z-[10] bg-[#021915] mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 navbar"
  let classes3 = "flex items-center gap-2 md:w-1/3 lg:hidden";
  let classList = classes3.split(' ');




 
  return (
	<div className={classes}>
    <Navbar className={classes2}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
		<div className={classes3}>
	  	<Image src="/logo.png" alt="logo" width={50} height={100} />
		<Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-[Bellefair]"
        >
          YOUTH BUSINESS LEAGUE
        </Typography>
		</div>
        <div className="hidden lg:block mx-auto">{navList}</div>
		{/*<div className="md:w-1/3">
        <Button variant="gradient" size="sm" className="hidden lg:block btn">
          <span>CONTACT US</span>
        </Button>
		</div>*/}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 mb-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto flex flex-col justify-center items-center">
          {navList}
          {/*<Button variant="gradient" size="sm" fullWidth className="btn mx-auto">
            <span>CONTACT US</span>
          </Button>*/}
        </div>
      </MobileNav>
    </Navbar>
	</div>
  );
}