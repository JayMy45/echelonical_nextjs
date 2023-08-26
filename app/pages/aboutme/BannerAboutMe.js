'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BannerAboutMe() {
    const lightBackgroundImage = "https://res.cloudinary.com/dp04hh5pz/image/upload/v1693010602/Echelonical/B07E7E88-4452-4F61-BDFF-F98E44FE387E_1_105_c_b2re9m.jpg";
    const darkBackgroundImage = "https://res.cloudinary.com/dp04hh5pz/image/upload/v1687974820/Echelonical/IMG_0672_kkhlbm.jpg"; // Replace with your dark mode background image URL

    const [backgroundImage, setBackgroundImage] = useState(lightBackgroundImage);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            setBackgroundImage(darkBackgroundImage);
        } else {
            setIsDarkMode(false);
            setBackgroundImage(lightBackgroundImage);
        }
    }, []);

    return (
        <>
            <div className="mt-2">
                <div className="relative py-3 md:py-32 h-full rounded-xl m-3 min-h-[500px]" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url('${backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom 5px"
                }}>


                    <div>
                        <h1 className="absolute top-8 text-green-900 dark:text-white left-10 text-5xl font-bold text-white mb-2 uppercase">About Me</h1>
                        <h3 className="absolute top-10 text-green-900 dark:text-white left-10 mt-10 text-2xl">Jeremy Myers</h3>
                    </div>
                    <div className="hidden md:block md:absolute md:top-0 md:right-0 w-fit p-2 mb-5 mt-32 md:mt-0">
                        <Image
                            className="bg-slate-700 bg-opacity-70 md:bg-opacity-95 rounded-xl shadow-xl md:mt-1"
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692543260/Echelonical/JeremyMyers.noBckgrnd_d1wdaf.png"
                            alt="Jeremy Myers"
                            width={175}
                            height={175}
                        />
                    </div>
                    <div className="block md:hidden mx-auto w-fit p-2 mb-5 mt-28">
                        <Image
                            className="bg-black bg-opacity-75 rounded-full shadow-xl"
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692667554/Echelonical/JeremyMyers.Smile_rm2vjz.png"
                            alt="Jeremy Myers"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="absolute bottom-7 left-0 ml-3">
                        <Link href="pages/portfolio" className="text-green-900 dark:text-white bg-slate-300 bg-opacity-60 dark:bg-opacity-80 uppercase border px-8 py-2 md:py-4 font-bold tracking-wider shadow-lg rounded-md">
                            Explore Projects
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}