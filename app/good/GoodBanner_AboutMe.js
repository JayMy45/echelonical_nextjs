import Link from "next/link";

export default function GoodBanner() {


    return (
        <>
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
                    <div className="absolute top-0 right-0 p-6 text-3xl font-bold text-white uppercase">
                        <Link href="/pages/aboutme" >
                            <h2 className="text-4xl font-bold text-white  uppercase">
                                About Me
                            </h2>
                            <h3 className="text-lg text-gray-200">
                                Jeremy Myers
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>


    )
}