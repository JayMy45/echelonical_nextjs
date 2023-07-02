// using this module as a client to be able to useState and other REACT hooks.
'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoodBanner from "./GoodBanner_AboutMe";
import GoodPortfolio from "./GoodPortfolio";


export default function Goods() {
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
            {/* <div className="relative w-80 h-80">
                <div className="absolute w-40 h-40 border-2 top-0 left-0">
                    01
                </div>
                <div className="absolute w-40 h-40 border-2 top-0 right-0">
                    02
                </div>
                <div className="absolute w-40 h-40 border-2 bottom-0 left-0">
                    03
                </div>
                <div className="absolute w-40 h-40 border-2 bottom-0 right-0">
                    04
                </div>
                <div className="absolute bg-gray-700 w-40 h-40 border-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    05
                </div>
            </div> */}

            <div className="relative w-screen h-screen">
                <div className="absolute w-1/2 h-1/2 border-2 top-0 left-0">
                    01
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 top-0 right-0">
                    <GoodBanner />
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 bottom-0 left-0">
                    03
                    <GoodPortfolio />
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 bottom-0 right-0">
                    04
                </div>
                <div className="absolute w-1/4 h-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    05
                    <div className="bg-black border-2 items-center rounded-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image
                            className="items-center rounded-full"
                            src={imageSrc}
                            alt="Picture of Dog"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}