export default function TechStack() {
    return (
        <>
            <div
                className="py-10 h-full rounded-xl relative"
                style={{
                    backgroundColor: "rgb(67 20 7)", // Replace with your desired color
                    height: "100%", // Adjust the height to your needs
                    width: "100%", // Adjust the width to your needs
                }}
            >
                <div className="flex flex-col">
                    <div className="flex flex-row justify-evenly p-2">
                        <div className="pl-20">
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/JavaScript_du3v5i.png" alt="JavaScript logo" title="JavaScript" />
                            </div>
                            {/* Javascript */}
                        </div>
                        <div>
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Python_xumyi4.png" alt="Python logo" title="Python" />
                            </div>
                            {/* Python */}
                        </div>
                        <div>
                            {/* SQL */}
                            <div className="pr-20">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955638/Echelonical/SQLIcon_adoiiw.png" alt="SQL logo" title="SQL" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row justify-evenly p-2">
                        <div className="pl-20">
                            {/* ReactJs */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/ReactJs_zenv6c.png" alt="ReactJS logo" title="ReactJS" />
                            </div>
                        </div>
                        <div>
                            {/* NextJs */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/NextJS_eea64l.png" alt="NextJS logo" title="NextJS" />
                            </div>

                        </div>
                        <div>
                            {/* Django */}
                            <div className="pr-20">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Django_nok2hx.png" alt="Django logo" title="Django" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly p-2">
                        <div className="pl-20">
                            {/* GitHub */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/GitHub_bibzbj.png" alt="GitHub logo" title="GitHub" />
                            </div>
                        </div>
                        <div>
                            {/* Bulma */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955638/Echelonical/BulmaIcon_t4ge8f.png" alt="Bulma logo" title="Bulma" />
                            </div>

                        </div>
                        <div>
                            {/* Tailwind */}
                            <div className="pr-20">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/Tailwind_h5mzbg.png" alt="Tailwind CSS logo" title="Tailwind" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly p-2">
                        <div className="pl-20">
                            {/* HTML */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/HTML_ypuzpt.png" alt="HTML logo" title="HTML" />
                            </div>
                        </div>
                        <div>
                            {/* CSS */}
                            <div className="">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/CSS_ygyrs3.png" alt="CSS logo" title="CSS" />
                            </div>

                        </div>
                        <div>
                            {/* Bootstrap */}
                            <div className="pr-20">
                                <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/BootStrap_xxvsay.png" alt="BootStrap logo" title="BootStrap" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6 text-4xl font-bold text-white uppercase">
                    <h2>Skills</h2>
                </div>
            </div>
        </>
    )
}