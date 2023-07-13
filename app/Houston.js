// using this module as a client to be able to useState and other REACT hooks.
'use client'

import Image from "next/image";
import { useState } from "react";


export default function Houston() {
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
            <div className="border-2 rounded-full bg-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image
                    className="items-center rounded-full"
                    src={imageSrc}
                    alt="Picture of Dog"
                    width={200}
                    height={200}
                    priority={true}
                />
            </div>
        </>
    )
}