
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
            <nav className="mt-10 ml-20">
                <div className="max-w-full px-4">
                    <div className="flex ">
                        <div className="flex ">
                            <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Image
                                    className="items-center py-1 px-2"
                                    src={imageSrc}
                                    alt="Picture of Dog"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="item-center space-x-5 mt-20">
                                <div className="dark:border-l-2 dark:border-l-white border-l 2 border-l-black p-5 mt-20 h-20">
                                    <Link href="#home" className="pr-3">
                                        Home
                                    </Link>
                                    <Link href="#services" className="px-3">
                                        My Services
                                    </Link>
                                    <Link href="#about" className="px-3">
                                        About Me
                                    </Link>
                                    <Link href="#work" className="px-3">
                                        My Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
