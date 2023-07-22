import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Portfolio - JNM',
    description: 'List of Projects',
}


export default function Page() {
    return (
        <>
            {/* portfolio container*/}
            <div className="flex flex-cols border-t-2 mt-5">
                <div className="mx-auto">
                    <h2 className="font-bold text-slate-950 dark:text-gray-200 text-4xl text-center mb-6 mt-6">Portfolio</h2>

                    {/* card container */}
                    <div className="flex flex-wrap space-y-5 12pro:space-y-5 lg:space-y-0 lg:justify-between md:space-x-30 lg:space-x-12 m-2">

                        {/* Done Container*/}
                        <div className="flex flex-row max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col p-4 dark:bg-gray-600 bg-gray-300 shadow-xl">

                                <div className="flex">
                                    <div className="flex flex-col justify-between mt-2 ml-1">
                                        <div className="">
                                            <Image
                                                width={180}
                                                height={180}
                                                className="bg-white object-contain rounded-xl"
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                                                alt="image of full stack capstone"
                                            />
                                        </div>
                                        <div className="w-40">
                                            <a href="#">
                                                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                                    Done&#8253;
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-green-400 italic">
                                                    Front-End Capstone
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block text-gray-700 dark:text-gray-300">Done‽ is a front-end application designed to streamline household chore management and completion for families. With Done‽, administrators (parents) gain the ability to effortlessly create and assign personalized tasks. Standard users (children) can easily create and access their assigned tasks, marking them as complete once finished.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of DONE Card */}

                                <div className="flex flex-col mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="flex w-fit rounded-xl">

                                        {/* React */}
                                        <div className="m-1">
                                            <img
                                                className="rounded-sm w-fit mx-auto"
                                                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                                alt="React logo"
                                                title="ReactJs" />
                                        </div>

                                        {/* JSON Server */}
                                        <div className="m-1">
                                            <Link href="https://github.com/JayMy45/Done-api"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                    src="https://img.shields.io/badge/JSON-%2320232a.svg?style=for-the-badge&logo=json&logoColor=%23FFFFFF"
                                                    alt="JSON logo"
                                                    title="JSON" />
                                            </Link>
                                        </div>

                                        {/* Bootstrap */}
                                        <div className="m-1">
                                            <img
                                                className="rounded-sm w-fit mx-auto bg-white"
                                                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                                                alt="Bootstrap logo"
                                                title="Bootstrap" />
                                        </div>

                                        {/* GitHub */}
                                        <div className="m-1">
                                            <Link href="https://github.com/JayMy45/Done-Capstone"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                    src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                                    alt="GitHub logo"
                                                    title="GitHub" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Project Button DONE?! */}
                                    <div className="mt-2">
                                        <Link href="/pages/Done"
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Demo Project
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 -mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* card2 - Music City Pressure */}
                        <div className="flex max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-4 md:mt-0">
                            <div className="flex flex-col p-4 dark:bg-gray-700 bg-slate-300">

                                <div className="flex">
                                    <div className="flex flex-col justify-between mt-2 ml-1">
                                        <div className="">
                                            <Image
                                                className="bg-white dark:bg-stone-300 object-contain rounded-xl"
                                                width={180}
                                                height={180}
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                                alt="image of full stack capstone"
                                            />
                                        </div>
                                        <div className="w-40">
                                            <a href="#">
                                                <h2
                                                    className="text-sm  md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    Music City Pressure
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-yellow-500 italic">
                                                    Back-End Capstone
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">Music City Pressure is a back-end project designed to facilitate the scheduling and tracking of home power washing appointments. It empowers customers by providing them with essential information and tools to efficiently manage their appointments. The project encompasses three distinct views to enhance user experience and functionality.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of MCP Card */}
                                <div className="flex flex-col mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="flex w-fit">
                                        <div className="m-1">
                                            {/* React */}
                                            <div className="">
                                                <img className="rounded-sm w-fit mx-auto" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Badge" title="ReactJs" />
                                            </div>
                                        </div>
                                        <div className="m-1">
                                            {/* Python */}
                                            <div className="">
                                                <img className="rounded-sm w-fit mx-auto" src="https://img.shields.io/badge/Python-%2320232a.svg?style=for-the-badge&logo=python&logoColor=%23FFFFFF)](https://www.python.org/" alt="Python Badge" title="Python" />
                                            </div>
                                        </div>
                                        <div>
                                            {/* Django */}
                                            <div className="m-1">
                                                <Link href="" target="_blank" rel="noopener noreferrer">
                                                    <img className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500" src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django Badge" title="Django" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Bulma */}
                                            <div className="m-1">
                                                <img className="rounded-sm w-fit mx-auto bg-white" src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white" alt="Bulma Badge" title="Bulma" />
                                            </div>
                                        </div>
                                        <div className="m-1">
                                            {/* GitHub */}
                                            <div className="">
                                                <Link href="https://github.com/JayMy45/Done-Capstone" target="_blank" rel="noopener noreferrer">
                                                    <img className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" title="GitHub" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/pages/MusicCityPressure"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Demo Project
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 -mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
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