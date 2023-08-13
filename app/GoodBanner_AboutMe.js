import Link from "next/link";

export default function GoodBanner() {

    return (
        <>
            <Link href="/pages/aboutme" >
                <div
                    className="py-20 h-full relative rounded-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1687974820/Echelonical/IMG_0672_kkhlbm.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container mx-auto px-6 mt-40">
                        <div className="absolute top-0 left-0 p-6 text-3xl font-bold text-white uppercase">

                            <h3 className="text-4xl font-bold text-white  uppercase">
                                About Me
                            </h3>

                            <div className="bg-indigo-800 bg-opacity-80 p-2 rounded-lg">
                                <h2 className="text-xl text-gray-200">
                                    Jeremy Myers
                                </h2>
                                <h4 className="text-sm text-yellow-600">
                                    Full-Stack Developer
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>


    )
}