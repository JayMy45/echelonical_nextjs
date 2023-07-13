import Link from "next/link";

export const metadata = {
    title: 'Done‽ - Frontend Project',
    description: 'Frontend Project',
}

export default function Done() {
    return (
        <>
            <div className="mt-20">
                <div className="py-20 h-screen bg-slate-200" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0.2,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688072376/Echelonical/bg-done_jdd3cp.png')",
                    backgroundSize: "contain", // Updated property
                    // backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-6 mt-40">
                        <h2 className="text-7xl font-bold text-white mt-40 uppercase">Done‽</h2>
                        <h3 className="text-3xl font-semibold text-gray-200 bg-gray-500 w-fit px-5 py-2 rounded-lg ml-3">Frontend Capstone</h3>

                        <div className="border-2 bg-yellow-200 bg-opacity-50 w-fit p-3 pr-5 ml-3 mt-2 rounded-lg">
                            <h3 className="text-2xl text-gray-200 bg-green-900 w-fit px-3 pt-1 rounded-lg ml-3">Tech Stack</h3>

                            {/* Tech Stack Used DIV */}
                            <div className="flex p-1 w-fit border-4 border-slate-800 bg-gray-900 bg-opacity-50 rounded-xl shadow-lg mt-1 ml-3">
                                <div className="p-1">
                                    {/* ReactJs */}
                                    <div className="">
                                        <img className="rounded-xl w-12 h-12 mx-auto bg-black p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/ReactJs_zenv6c.png" alt="ReactJS logo" title="ReactJS" />
                                    </div>
                                </div>
                                <div>
                                    {/* JSON Server */}
                                    <div className="p-1">
                                        <Link href="https://github.com/JayMy45/Done-api" target="_blank" rel="noopener noreferrer">
                                            <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1 hover:bg-indigo-500" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1689020615/Echelonical/JSON_Server_fgnf93.png" alt="BootStrap logo" title="JSON Server" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    {/* Bootstrap */}
                                    <div className="p-1">
                                        <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688955106/Echelonical/BootStrap_xxvsay.png" alt="BootStrap logo" title="BootStrap" />
                                    </div>

                                </div>
                                <div className="p-1">
                                    {/* GitHub */}
                                    <div className="">
                                        <Link href="https://github.com/JayMy45/Done-Capstone" target="_blank" rel="noopener noreferrer">
                                            <img className="rounded-xl w-12 h-12 mx-auto bg-white p-1 hover:bg-indigo-500" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688952438/Echelonical/GitHub_bibzbj.png" alt="GitHub logo" title="GitHub" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider mt-24 shadow-lg">
                            Check It Out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}