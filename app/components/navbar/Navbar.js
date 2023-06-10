import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <button className="nav__toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>


                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}