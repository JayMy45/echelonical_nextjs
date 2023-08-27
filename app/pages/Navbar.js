
// using this module as a client to be able to useState and other REACT hooks.
'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgExternal } from "react-icons/cg";
import Hamburger from "./hamburger";

export const Navbar = () => {

    const defaultImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060410/Echelonical/houston.grayscale_e1u8yo.png';
    const hoverImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060773/Echelonical/houston.color.bronz_n5fzub.png';


    const [imageSrc, setImageSrc] = useState(defaultImageSrc);


    const handleMouseEnter = () => {
        setImageSrc(hoverImageSrc);
    };

    const handleMouseLeave = () => {
        setImageSrc(defaultImageSrc);
    };

    return (
        <>
            <nav
                className="sticky top-0 z-10 pb-1 flex items-center"
                style={{
                    backgroundColor: 'rgb(var(--background-start-rgb), 0.99)',
                    color: 'rgb(var(--foreground-rgb))'
                }}
            >
                <div className="flex justify-between md:items-center w-full px-4 ml-auto">
                    <div className="hidden md:block">
                        <div className="flex">
                            <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Link href="pages">
                                    <Image
                                        className="items-center px-2"
                                        src={imageSrc}
                                        alt="Picture of Dog"
                                        width={150}
                                        height={150}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                            <div className="mx-auto md:mt-14 ">
                                <div className="dark:border-l-0 border-l-0 md:border-1 dark:border-l-white md:border-l-2 border-l-black md:py-1 mt-10 md:mt-16 md:h-14 flex items-center justify-center">
                                    <Link href={'/'} className="px-1 ml-1 md:text-sm">
                                        <span className="text-lg md:text-base">Home</span>
                                    </Link>
                                    <Link href="/pages/aboutme" className="px-2  md:text-sm">
                                        <span className="text-base">About</span>
                                    </Link>
                                    <Link href="/pages/portfolio" className="px-2  md:text-sm">
                                        <span className="text-base">Portfolio</span>
                                    </Link>
                                    <Link href="/pages/skills" className="px-2  md:text-sm">
                                        <span className="text-base">Skills</span>
                                    </Link>
                                    <Link href="/pages/contact" className="px-2 md:text-sm">
                                        <span className="text-base">Contact</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Hamburger />

                    {/* Link to Resume */}
                    <div className="hidden md:block">
                        <div className="flex justify-start w-fit rounded-md mr-3 bg-indigo-400">
                            <Link
                                href="/JNM.Resume.pdf"
                                className="flex justify-center items-center gap-x-2 w-fit px-6 py-3 "
                                // download="JNM.Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>Resume</p>
                                <CgExternal size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
