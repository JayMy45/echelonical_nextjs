
// using this module as a client to be able to useState and other REACT hooks.
'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {

    const defaultImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060410/Echelonical/houston.grayscale_e1u8yo.png';
    const hoverImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060773/Echelonical/houston.color.bronz_n5fzub.png'; // Add URL of the image you want to show on hover


    const [imageSrc, setImageSrc] = useState(defaultImageSrc);


    const handleMouseEnter = () => {
        setImageSrc(hoverImageSrc);
    };

    const handleMouseLeave = () => {
        setImageSrc(defaultImageSrc);
    };

    return (
        <>
            <nav className="md:ml-9 ">
                <div className="flex flex-col md:flex-row md:items-center max-w-full px-4 ml-auto">
                    <div className=" sm-justify-items-center">
                        <div className="flex">
                            <div className="mt-5 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Link href="pages">
                                    <Image
                                        className="items-center py-1 px-2 hidden md:block"
                                        src={imageSrc}
                                        alt="Picture of Dog"
                                        width={200}
                                        height={200}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                            <div className="mx-auto md:mt-20 md:py-5 ">
                                <div className="dark:border-l-0 border-l-0 md:border-1 md:border-l-white md:border-l-2 border-l-black md:p-5 mt-20 md:h-20 flex items-center justify-center">
                                    <Link href={'/'} className="pr-3">
                                        Home
                                    </Link>
                                    {/* <Link href="#services" className="px-3">
                                        My Services
                                    </Link> */}
                                    <Link href="/pages/aboutme" className="px-3">
                                        About Me
                                    </Link>
                                    <Link href="/pages/portfolio" className="px-3">
                                        Portfolio
                                    </Link>
                                    <Link href="/pages/skills" className="px-3">
                                        Skills
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Introduction/Howdie */}


                </div>
            </nav>
        </>
    );
};
