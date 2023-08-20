import Image from "next/image";
import Link from "next/link";

export default function BannerAboutMe() {


    return (
        <>
            <div className="mt-2">
                <div className="relative py-3 md:py-32 h-full rounded-xl m-3 min-h-[500px]" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1687974820/Echelonical/IMG_0672_kkhlbm.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom 5px"
                }}>
                    <div>
                        <h1 className="absolute top-8 left-10 text-5xl font-bold text-white mb-2 uppercase">About Me</h1>
                        <h3 className="absolute top-10 left-10 mt-10 text-2xl">Jeremy Myers</h3>
                    </div>
                    <div className="absolute top-0 right-0 w-fit  p-2 bg-opacity-40 mb-5">
                        <Image
                            className="bg-slate-700 bg-opacity-95 rounded-xl shadow-xl mx-auto mt-1"
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692543260/Echelonical/JeremyMyers.noBckgrnd_d1wdaf.png"
                            alt="Jeremy Myers"
                            width={175}
                            height={175}
                        />
                    </div>

                    <div className="absolute bottom-7 left-0 ml-3">
                        <Link href="pages/portfolio" className="text-white uppercase border-2 px-8 py-2 md:py-4 font-bold tracking-wider shadow-lg rounded-md">
                            Explore Projects
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}