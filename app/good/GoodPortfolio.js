import Image from "next/image";
import Link from "next/link";

export default function GoodPortfolio() {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-7 max-w-xl  overflow-hidden mx-auto mt-10 p-5">

                <div className="border-2 rounded-lg bg-white shadow-lg p-3">
                    <Link className="" href="/pages/Done">
                        <Image
                            className="bg-white w-full"
                            width={200}
                            height={200}
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                            alt="image of full stack capstone"
                        />
                        <span className="bg-green-600 p-1 text-white mb-5 ml-4 rounded-lg font-bold" >
                            Demo Project
                        </span>
                    </Link>
                </div>

                <div className="border-2 rounded-lg bg-white shadow-lg p-3">
                    <Link className="" href="/pages/MusicCityPressure">
                        <Image
                            className="bg-white w-full"
                            width={150}
                            height={150}
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                            alt="image of full stack capstone"
                        />
                        <span className="bg-orange-200 p-1 text-gray-700 mb-5 ml-4 rounded-lg font-bold" >
                            Demo Project
                        </span>
                    </Link>
                </div>

                <div className="container">
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-3xl font-bold text-white mb-1 uppercase">Portfolio</h2>
                    </div>
                </div>
            </div>
        </>
    )
}