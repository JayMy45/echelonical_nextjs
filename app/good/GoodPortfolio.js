import Image from "next/image";
import Link from "next/link";

export default function GoodPortfolio() {
    return (
        <>
            <div className="p-5 h-full">
                <div className="flex space-x-6 p-2 w-9/12 mx-auto my-8">

                    {/* Done */}
                    <div className="border-2 rounded-lg bg-white shadow-lg p-3 w-auto">
                        <Link className="" href="/pages/done">
                            <Image
                                className="bg-white w-full"
                                width={150}
                                height={150}
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                                alt="image of front-end capstone"
                            />
                        </Link>
                    </div>

                    {/* Music City Pressure */}
                    <div className="border-2 rounded-lg bg-white shadow-lg p-3 w-auto">
                        <Link className="" href="/pages/musiccitypressure">
                            <Image
                                className="bg-white w-full"
                                width={150}
                                height={150}
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                alt="image of full stack capstone"
                            />
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="relative md:absolute bottom-0 left-0 p-6">
                        <Link href="/pages/portfolio">
                            <h2 className="text-3xl font-bold text-white mb-1 uppercase">Portfolio</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}