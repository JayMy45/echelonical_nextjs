import Link from "next/link";

export const metadata = {
    title: 'MusicCItyPressure - Backend Project',
    description: 'Music City Pressure',
}


export default function MusicCityPressure() {
    return (
        <>
            <section className="mt-10 p-10">
                <div className="py-20 min-h-screen" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688071197/Echelonical/musicCityPressure.House_wo5l6f.png')",
                    backgroundSize: "contain", // Updated property
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-6 mt-40">
                        <h2 className="text-5xl font-bold text-white mt-40 uppercase">Music City Pressure</h2>
                        <h3 className="text-2xl text-gray-200 bg-red-900 w-fit px-5 py-2 rounded-lg ml-3">Backend Capstone</h3>

                        <div className="border-2 border-yellow-600 bg-slate-500 bg-opacity-50 w-fit p-3 pr-5 ml-3 mt-2 rounded-lg">
                            <h3 className="text-2xl text-black bg-orange-500 w-fit px-3 py-1 rounded-lg mt-1 ml-3">Tech Stack</h3>

                            {/* Tech Stack Used DIV */}
                            <div className="grid grid-cols-3 p-1 w-fit rounded-xl mt-1 ml-2 border-4 border-yellow-700 bg-indigo-900 bg-opacity-50 shadow-lg">
                                <div className="p-2">
                                    {/* ReactJs */}
                                    <div className="">
                                        <img className="rounded-xl w-12 h-12 mx-auto bg-black p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/ReactJs_zenv6c.png" alt="ReactJS logo" title="ReactJS" />
                                    </div>
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
                                        <Link href="https://github.com/JayMy45/music-city-pressure-SERVER" target="_blank" rel="noopener noreferrer">
                                            <img className="rounded-xl w-12 h-12 mx-auto bg-white hover:bg-indigo-500 p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952439/Echelonical/Django_nok2hx.png" alt="Django logo" title="Django Server" />
                                        </Link>
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
                                        <Link href="https://github.com/JayMy45/music-city-pressure-CLIENT" target="_blank" rel="noopener noreferrer">
                                            <img className="rounded-xl w-12 h-12 mx-auto bg-white hover:bg-indigo-500 p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/GitHub_bibzbj.png" alt="GitHub logo" title="GitHub" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg mt-20">
                            Check It Out
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}