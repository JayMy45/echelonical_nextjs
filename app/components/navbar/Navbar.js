import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Image
                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1686624895/Echelonical/houston_pic_liqfpl.png"
                        alt="Picture of Dog"
                        width={128}
                        height={128}
                    />


                    <button className="nav__toggle" aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>
                </div>

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
            </nav>
        </>
    );
};
