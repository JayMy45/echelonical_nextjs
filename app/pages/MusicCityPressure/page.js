export default function MusicCityPressure() {
    return (
        <>
            <div className="mt-10">
                <div className="py-20 h-screen" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688071197/Echelonical/musicCityPressure.House_wo5l6f.png')",
                    backgroundSize: "contain", // Updated property
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-6 mt-40">
                        <h2 className="text-5xl font-bold text-white mt-40 uppercase">Music City Pressure</h2>
                        <h3 className="text-2xl text-gray-200 bg-red-900 w-fit px-5 py-2 rounded-lg ml-3">Backend Capstone</h3>
                        <h3 className="text-2xl text-black bg-orange-500 w-fit px-3 py-1 rounded-lg mt-1 ml-3">Tech Stack</h3>

                        {/* Tech Stack Used DIV */}
                        <div className="flex p-3 w-fit">
                            <div className="p-2">
                                <div className="">
                                    <img className="rounded-xl w-12 h-12 mx-auto" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/JavaScript_du3v5i.png" alt="JavaScript logo" title="JavaScript" />
                                </div>
                                {/* Javascript */}
                            </div>
                            <div>
                                {/* Python Server */}
                                <div className="p-2">
                                    <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Python_xumyi4.png" alt="Python logo" title="Python" />

                                </div>
                            </div>
                            <div>
                                {/* Django */}
                                <div className="p-2">
                                    <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Django_nok2hx.png" alt="Django logo" title="Django" />
                                </div>
                            </div>
                            <div>
                                {/* Bulma */}
                                <div className="p-2">
                                    <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955638/Echelonical/BulmaIcon_t4ge8f.png" alt="Bulma logo" title="Bulma" />
                                </div>

                            </div>
                            <div>
                                {/* CSS */}
                                <div className="p-2">
                                    <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/CSS_ygyrs3.png" alt="CSS logo" title="CSS" />
                                </div>
                            </div>
                            <div className="p-2">
                                {/* GitHub */}
                                <div className="">
                                    <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/GitHub_bibzbj.png" alt="GitHub logo" title="GitHub" />
                                </div>
                            </div>
                        </div>
                        <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
                            Check It Out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}