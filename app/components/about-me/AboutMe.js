import Image from "next/image";
import BannerAboutMe from "./BannerAboutMe";

export default function AboutMe() {
    return (
        <>
            {/* Section Container */}
            <div className="border-2 p-10 rounded-xl mb-5 mt-5" id="about">

                {/* About Me */}
                <div
                    className="border-2 px-20 py-10"
                >

                    <h2 className="bg-gray-100 opacity-25 p-3 text-gray-700">Who I am</h2>
                    <p className="text-yellow-300">I am a passionate learner with a deep interest in understanding various subjects. After exploring different career paths, I have found software development to be both engaging and rewarding. Although software development has always been of interest to me, I didn't pursue it right away due to various circumstances and self-doubt. However, my love for finding technological solutions to everyday problems has grown and solidified my decision to pursue a career in software development. My previous experiences, including working as a biomedical researcher, field application scientist, and facility manager, have helped me develop the grit, strength, and patience needed to overcome complex and unexpected challenges. I am now excited to have the opportunity to learn and grow as a software developer.</p>

                    <div className="about-me__body">
                        <p></p>
                        <p></p>
                    </div>
                    <img src="" alt="" />
                </div>


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
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        className="bg-white dark:bg-gray-200 object-cover"
                                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                        alt="image of full stack capstone"
                                    />
                                </div>

                                {/* Bottom half of MCP Card */}
                                <div className="flex flex-col justify-between p-4 dark:bg-yellow-900 bg-slate-300">
                                    <a href="#">
                                        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music City Pressure<span></span></h5>
                                    </a>
                                    <div className="py-3">
                                        <p className="pb-4 font-normal text-gray-700 dark:text-gray-300">Music City Pressure is a back-end project designed to facilitate the scheduling and tracking of home power washing appointments. It empowers customers by providing them with essential information and tools to efficiently manage their appointments. The project encompasses three distinct views to enhance user experience and functionality.</p>
                                    </div>
                                    <div className="">
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

                {/* Test Banner */}
                <div className="mt-8">
                    <BannerAboutMe />
                </div>



            </div>
        </>
    )
}