import Image from "next/image";

export default function Portfolio() {
    return (
        <>
            {/* portfolio container*/}
            <div className="mt-10 mb-10 border-t-2 border-b-2" id="work">
                <div className="">
                    <h2 className="font-bold text-gray-200 text-4xl text-center mb-10 mt-2">Portfolio</h2>
                    <p className=""></p>

                    {/* card container */}
                    {/* <div className="flex justify-between mt-3"> */}
                    <div className="grid p-10 sm:grid-col-1 md:grid-cols-1 lg:grid-cols-2 xl:grids-cols-2 gap-5">

                        {/* card1 - Done?!*/}
                        <div className="max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <Image
                                width={600}
                                height={500}
                                className="bg-white object-cover"
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                                alt="image of full stack capstone"
                            />
                            {/* Bottom half of DONE Card */}
                            <div className="p-4 dark:bg-gray-600 bg-gray-300">
                                <a href="#">
                                    <h5 className="mb-2 mt-2 text-2xl tracking-tight text-gray-900 dark:text-white">Done&#8253;<span></span></h5>
                                </a>
                                <div className="py-3">
                                    <p className="pb-4 font-normal text-gray-700 dark:text-gray-300">Done‽ is a front-end application designed to streamline household chore management and completion for families. With Done‽, administrators (parents) gain the ability to effortlessly create and assign personalized tasks. Standard users (children) can easily create and access their assigned tasks, marking them as complete once finished.</p>
                                </div>

                                <div className="">
                                    <a href="/pages/Done" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Demo Project
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* card2 - Music City Pressure */}
                        <div className="max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">

                            <div>
                                <Image
                                    width={600}
                                    height={500}
                                    className="bg-white dark:bg-stone-300 object-cover"
                                    src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                    alt="image of full stack capstone"
                                />
                            </div>

                            {/* Bottom half of MCP Card */}
                            <div className="flex flex-col justify-between p-4 dark:bg-gray-700 bg-slate-300">
                                <a href="#">
                                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music City Pressure<span></span></h5>
                                </a>
                                <div className="py-3">
                                    <p className="pb-4 font-normal text-gray-700 dark:text-gray-300">Music City Pressure is a back-end project designed to facilitate the scheduling and tracking of home power washing appointments. It empowers customers by providing them with essential information and tools to efficiently manage their appointments. The project encompasses three distinct views to enhance user experience and functionality.</p>
                                </div>
                                <div className="">
                                    <a href="/pages/MusicCityPressure" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Demo Project
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card containerEnd */}
            </div>
            {/* portfolioContainerEnd */}

        </>
    )
}