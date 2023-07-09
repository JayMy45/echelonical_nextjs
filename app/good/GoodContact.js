import Link from "next/link";

export default function Contact() {
    return (
        <>
            {/* <div
                className="py-20 h-full rounded-xl relative"
                style={{
                    backgroundColor: "#2d3748", // Replace with your desired color
                    height: "100%", // Adjust the height to your needs
                    width: "100%", // Adjust the width to your needs
                }}
            > */}
            <div
                // https://res.cloudinary.com/dp04hh5pz/image/upload/v1688933638/Echelonical/stixs_iytchd.png
                className="py-7 h-full relative rounded-xl"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute top-0 right-0 p-6 text-3xl font-bold text-white uppercase">
                    <h2>Contact Me</h2>
                </div>
                {/* <div className=" inline-block"> */}
                <div className="flex justify-center justify-evenly mt-10 mx-auto  p-5">
                    <Link className="p-1" href="https://www.linkedin.com/in/jeremynmyers/" target="_blank" rel="noopener noreferrer">
                        <img className="bg-white rounded-xl w-24 h-24" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688936610/Echelonical/Untitled_design_4_xrvhru.png" alt="linkedIn Logo" />
                    </Link>
                    <div className="flex flex-cols justify-center">
                        <div>
                            <div className="">
                                <img className="rounded-xl w-24 h-20 mx-auto" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688943965/Echelonical/emailNashville-bgWhite_mfyvqo.png" alt="email logo" />
                            </div>
                            <div className="mt-1">
                                <h2 className="font-bold">jnmyers774@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    <Link className="p-1" href="https://github.com/JayMy45" target="_blank" rel="noopener noreferrer">
                        <img className="bg-gray-200 rounded-xl w-24 h-24" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935951/Echelonical/Untitled_design_6_swt1g0.png" alt="GitHub Logo" />
                    </Link>
                </div>
            </div >
        </>
    )
}