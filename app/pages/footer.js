import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="">
                <div className="flex justify-center">
                    <div className="ml-2">
                        <Link className="" href="">
                            <img className="rounded-full w-9 h-9 mx-auto" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688943965/Echelonical/emailNashville-bgWhite_mfyvqo.png" alt="email logo" title="Email Address" />
                        </Link>
                    </div>
                    <div className="ml-2">
                        <Link className="" href="https://www.linkedin.com/in/jeremynmyers/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <img className="bg-white rounded-full w-9 h-9" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688936610/Echelonical/Untitled_design_4_xrvhru.png" alt="linkedIn Logo" />
                        </Link>
                    </div>
                    <div className="ml-2">
                        <Link className="" href="https://github.com/JayMy45" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <img className="bg-gray-200 rounded-full w-9 h-9" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935951/Echelonical/Untitled_design_6_swt1g0.png" alt="GitHub Logo" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}