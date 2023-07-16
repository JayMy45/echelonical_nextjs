export default function Page() {
    return (
        <>

            <div className="mt-10 text-center">
                <div
                    // https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg
                    className="py-8 h-full relative m-3 rounded-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1689015296/Echelonical/3A9F6061-4BD3-4691-9073-1D4B4934F31A_1_105_c_k3m479.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right 17%",
                    }}
                >
                    <h1 className="text-7xl">Skills</h1>

                    <div className="lg:flex flex-col p-10 mt-10">
                        <div className="flex flex-row justify-evenly p-2 mt-0 xl:mt-6">
                            <div className="pl-20">
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/JavaScript_du3v5i.png" alt="JavaScript logo" title="JavaScript" />
                                </div>
                                {/* Javascript */}
                            </div>
                            <div>
                                {/* Python */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Python_xumyi4.png" alt="Python logo" title="Python" />
                                </div>
                            </div>
                            <div>
                                {/* SQL */}
                                <div className="pr-20">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955638/Echelonical/SQLIcon_adoiiw.png" alt="SQL logo" title="SQL" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-row justify-evenly p-2">
                            <div className="pl-20">
                                {/* ReactJs */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/ReactJs_zenv6c.png" alt="ReactJS logo" title="ReactJS" />
                                </div>
                            </div>
                            <div>
                                {/* NextJs */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/NextJS_eea64l.png" alt="NextJS logo" title="NextJS" />
                                </div>

                            </div>
                            <div>
                                {/* Django */}
                                <div className="pr-20">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Django_nok2hx.png" alt="Django logo" title="Django" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-evenly p-2">
                            <div className="pl-20">
                                {/* GitHub */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/GitHub_bibzbj.png" alt="GitHub logo" title="GitHub" />
                                </div>
                            </div>
                            <div>
                                {/* Bulma */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955638/Echelonical/BulmaIcon_t4ge8f.png" alt="Bulma logo" title="Bulma" />
                                </div>

                            </div>
                            <div>
                                {/* Tailwind */}
                                <div className="pr-20">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/Tailwind_h5mzbg.png" alt="Tailwind CSS logo" title="Tailwind" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row justify-evenly p-2">
                            <div className="pl-20">
                                {/* HTML */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/HTML_ypuzpt.png" alt="HTML logo" title="HTML" />
                                </div>
                            </div>
                            <div>
                                {/* CSS */}
                                <div className="">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/CSS_ygyrs3.png" alt="CSS logo" title="CSS" />
                                </div>

                            </div>
                            <div>
                                {/* Bootstrap */}
                                <div className="pr-20">
                                    <img className="rounded-xl w-24 h-24 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/BootStrap_xxvsay.png" alt="BootStrap logo" title="BootStrap" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}