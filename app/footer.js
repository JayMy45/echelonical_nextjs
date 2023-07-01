import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer>
                <a href="" alt="" className="footer__link">jnmyers774@gmail.com</a>
                <ul className="social-list">
                    <li className="social-list__item"><a className="social-list__link" href="https://www.linkedin.com/in/jeremynmyers/">LinkedIn</a></li>
                    <li className="social-list__item"><a className="social-list__link" href="https://github.com/JayMy45">GitHub</a></li>
                </ul>
                {/* <figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-gray-600" id="home">
                    <Image
                        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688088238/Echelonical/Copy_of_Untitled_Design_1_w5g7ma.png"
                        alt="Picture of Me"
                        width={100}
                        height={100}
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h1 className="font-semibold text-4xl text-yellow-500">
                            Jeremy Myers
                        </h1>
                        <p className="dark:text-purple-800 text-purple-300 ml-3">
                            <span className="font-bold text-xl"> &lt; </span>
                            <span className="font-semibold text-lg">full-stack dev</span>
                            <span className="font-bold text-xl"> /&gt;</span>
                        </p>
                    </div>
                </figure> */}
            </footer>
        </>
    )
}