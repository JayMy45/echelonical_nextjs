import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="border-2">
                <a href="" alt="" className="footer__link">jnmyers774@gmail.com</a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://www.linkedin.com/in/jeremynmyers/">
                            LinkedIn
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com/JayMy45">
                            GitHub
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}