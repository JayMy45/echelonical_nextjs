import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Image
                        src='https://res.cloudinary.com/dp04hh5pz/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:f1eaea,c_fill,g_auto,r_max,w_1000/v1675295594/HoustonRocket.jpg'
                        alt="picture of ninja"
                        width={128}
                        height={77}
                    />

                    <button className="nav__toggle" aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>
                </div>

                <Link href="#home" className="nav__link">Home</Link>
                <Link href="#services" className="nav__link">My Services</Link>
                <Link href="#about" className="nav__link">About Me</Link>
                <Link href="#work" className="nav__link">My Work</Link>
            </nav>
        </>
    )
}