import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <nav className="mt-10">
                <div className="max-w-6 mx-auto px-4">
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
                            <div className="item-center space-x-4 mt-20">
                                <div className="border-l-2 p-5 mt-20">
                                    <Link href="#home" className="nav__link">
                                        Home
                                    </Link>
                                    <Link href="#services" className="nav__link">
                                        My Services
                                    </Link>
                                    <Link href="#about" className="nav__link">
                                        About Me
                                    </Link>
                                    <Link href="#work" className="nav__link">
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
