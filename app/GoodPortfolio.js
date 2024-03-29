import Image from "next/image";
import Link from "next/link";

export default function GoodPortfolio() {
    return (
        <>
            <Link href="/pages/portfolio">
                <div
                    // https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg
                    className="py-7 h-full relative rounded-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688933638/Echelonical/stixs_iytchd.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Project Links Commented out for now 07/15/2023*/}
                    {/* <div className="flex block 12pro:hidden space-x-6 p-2 w-9/12 mx-auto my-12 lg:my-5"> */}

                    {/* Done */}
                    {/* <div className="border-2 rounded-lg bg-white shadow-lg p-3 w-auto">
                        <Link href="/pages/Done">
                            <Image
                                className="bg-white w-full"
                                width={150}
                                height={150}
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                                alt="image of front-end capstone"
                            />
                        </Link>
                    </div> */}

                    {/* Music City Pressure */}
                    {/* <div className="border-2 rounded-lg bg-white shadow-lg p-3 w-auto">
                        <Link href="/pages/MusicCityPressure">
                            <Image
                                className="bg-white w-full"
                                width={150}
                                height={150}
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                alt="image of full stack capstone"
                            />
                        </Link>
                    </div> */}
                    {/* </div> */}

                    <div className="absolute  right-0 sm:bottom-0 md:left-0 p-6 text-4xl font-bold text-white uppercase top-0 md:top-auto">
                        <h2 className="text-4xl font-bold text-white mb-1 uppercase">Portfolio</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}