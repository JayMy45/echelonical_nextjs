import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <nav className="mt-10">
                <div className="max-w-full px-4">
                    <div className="flex ">
                        <div className="flex ">
                            <div className="">
                                <Image
                                    className="items-center py-1 px-2"
                                    src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1686624895/Echelonical/houston_pic_liqfpl.png"
                                    alt="Picture of Dog"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="item-center space-x-5 mt-20">
                                <div className="border-l-2 p-5 mt-20 h-20">
                                    <Link href="#home" className="">
                                        Home
                                    </Link>
                                    <Link href="#services" className="px-3">
                                        My Services
                                    </Link>
                                    <Link href="#about" className="px-3">
                                        About Me
                                    </Link>
                                    <Link href="#work" className="px-3">
                                        My Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
