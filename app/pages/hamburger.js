'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillLinkedin, AiOutlineClose, AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import { CgExternal } from "react-icons/cg";



export default function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 739 && navbarOpen) {
                setNavbarOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navbarOpen]);

    return (
        <>
            <div className="flex items-center cursor-pointer md:hidden mx-auto my-5 mr-5">

                <AiOutlineMenu
                    onClick={handleToggle}
                    size={30}
                    className="text-slate-100"
                />
            </div>
            <div className={navbarOpen
                ? "fixed left-0 top-0 w-[75%] h-screen bg-zinc-600 p-7 ease-in duration-500"
                : "fixed left-[-100%]  w-[75%] h-screen top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleToggle} className="cursor-pointer text-stone-100">
                        <AiOutlineClose
                            size={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-stone-100">
                                Home
                            </li>
                        </Link>
                        <Link href="/pages/aboutme">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-stone-100">
                                About
                            </li>
                        </Link>
                        <Link href="/pages/portfolio">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-stone-100">
                                Portfolio
                            </li>
                        </Link>
                        <Link href="/pages/skills">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-stone-100">
                                Skills
                            </li>
                        </Link>
                        <Link href="/pages/contact">
                            <li
                                onClick={() => setNavbarOpen(false)
                                }
                                className="py-4 cursor-pointer text-stone-100">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row justify-around pt-10 items-center">

                        <AiOutlineGithub
                            size={30}
                            className="cursor-pointer text-slate-100"
                            onClick={() => setNavbarOpen(false)
                            }
                        />

                        <AiFillLinkedin
                            size={30}
                            className="cursor-pointer text-slate-100"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        {/* Link to Resume */}
                        <div className="flex rounded-sm bg-slate-100 text-zinc-600 text-sm font-semibold w-fit">
                            <Link
                                href="/JNM.Resume.pdf"
                                className="flex justify-center items-center gap-x-2 w-fit px-2 py-1 "
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>Resume</p>
                                <CgExternal size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}