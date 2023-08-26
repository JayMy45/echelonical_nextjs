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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-5">

                        {/* Done Container*/}
                        <div className="flex max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col p-4 dark:bg-gray-600 bg-gray-300 shadow-xl">
                                <div className="flex">
                                    <div className="flex flex-col justify-between md:mt-2 md:ml-1">
                                        <div>
                                            <Image
                                                className="bg-white object-contain rounded-xl"
                                                width={180}
                                                height={180}
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                                                alt="image of front-end stack capstone"
                                            />
                                        </div>
                                        <div className="w-40 mt-2">
                                            <a href="#">
                                                <h2 className="text-sm md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                                    Done&#8253;
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-green-400 italic">
                                                    Front-End Project
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">Done‽ is a front-end application designed to streamline household chore management and completion for families. With Done‽, administrators (parents) gain the ability to effortlessly create and assign personalized tasks. Standard users (children) can easily create and access their assigned tasks, marking them as complete once finished.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of DONE Card */}
                                <div className="flex flex-col mt-2 md:mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="hidden md:flex w-fit">

                                        {/* React */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto"
                                                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                                    alt="React logo"
                                                    title="ReactJs" />
                                            </div>
                                        </div>

                                        {/* JSON Server */}
                                        <div className="m-0.5">
                                            <div>
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
                                        </div>

                                        {/* Bootstrap */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white"
                                                    src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                                                    alt="Bootstrap logo"
                                                    title="Bootstrap" />
                                            </div>
                                        </div>

                                        {/* GitHub */}
                                        <div className="m-0.5">
                                            <div>
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
                                    </div>

                                    {/* Project Button DONE?! */}
                                    <div className="mx-auto md:mx-0 md:mt-4">
                                        <Link href="/pages/Done"
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Demo Project
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 mr-1"
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
                        <div className="flex max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col p-4 dark:bg-gray-700 bg-slate-300 shadow-xl">

                                <div className="flex">
                                    <div className="flex flex-col justify-between md:mt-2 md:ml-1">
                                        <div>
                                            <Image
                                                className="bg-white dark:bg-stone-300 object-contain rounded-xl"
                                                width={180}
                                                height={180}
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918656/Echelonical/Music_City_2_zpaokx.png"
                                                alt="image of full stack capstone"
                                            />
                                        </div>
                                        <div className="w-40 mt-2">
                                            <a href="#">
                                                <h2
                                                    className="text-sm  md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    Music City Pressure
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-yellow-500 italic">
                                                    Full-Stack Project
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">Music City Pressure is a back-end project designed to facilitate the scheduling and tracking of home power washing appointments. It empowers customers by providing them with essential information and tools to efficiently manage their appointments. The project encompasses three distinct views to enhance user experience and functionality.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of MCP Card */}
                                <div className="flex flex-col mt-2 md:mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="hidden md:flex w-fit">

                                        {/* React */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto"
                                                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                                    alt="React Badge"
                                                    title="ReactJs"
                                                />
                                            </div>
                                        </div>

                                        {/* Python */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto"
                                                    src="https://img.shields.io/badge/Python-%2320232a.svg?style=for-the-badge&logo=python&logoColor=%23FFFFFF)](https://www.python.org/"
                                                    alt="Python Badge"
                                                    title="Python"
                                                />
                                            </div>
                                        </div>

                                        {/* Django */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
                                                        alt="Django Badge"
                                                        title="Django"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Bulma */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white"
                                                    src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white"
                                                    alt="Bulma Badge"
                                                    title="Bulma"
                                                />
                                            </div>
                                        </div>

                                        {/* GitHub */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="https://github.com/JayMy45/Done-Capstone" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                                        alt="GitHub Badge"
                                                        title="GitHub"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mx-auto md:mx-0 md:mt-4">
                                        <Link href="/pages/MusicCityPressure"
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Demo Project
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 mr-1"
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


                        {/* card3- Rewrite the Narrative */}
                        <div className="flex max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-zinc-900">
                            <div className="flex flex-col p-4 dark:bg-zinc-700 bg-slate-300 shadow-xl">

                                <div className="flex">
                                    <div className="flex flex-col justify-between md:mt-2 md:ml-1">
                                        <div>
                                            <Image
                                                className="bg-white dark:bg-stone-300 object-contain rounded-xl"
                                                width={180}
                                                height={180}
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690413201/RewriteTheNarrative/ReWrte_the_Narrative_4_tzprwx.png"
                                                alt="image of Website Logo"
                                            />
                                        </div>
                                        <div className="w-40 mt-2">
                                            <a href="#">
                                                <h2
                                                    className="text-sm  md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16">
                                                    Rewrite the Narrative
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-yellow-300 italic">
                                                    Front-End Application
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">The purpose of the Rewrite the Narrative Workshops is to empower individuals to transform their lives by reshaping their personal narratives. These workshops help participants align their thoughts and words with their true aspirations, enabling them to understand how to fulfill their deepest desires. </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of MCP Card */}
                                <div className="flex flex-col mt-2 md:mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="hidden md:flex w-fit">

                                        {/* NextJs */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"
                                                        alt="NextJs Badge"
                                                        title="NextJs"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Tailwind CSS */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white"
                                                    src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                                    alt="Tailwind CSS Badge"
                                                    title="Tailwind CSS"
                                                />
                                            </div>
                                        </div>

                                        {/* GitHub */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="https://github.com/JayMy45/Done-Capstone" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                                        alt="GitHub Badge"
                                                        title="GitHub"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mx-auto md:mx-0 md:mt-4">
                                        <Link href="http://www.rewritethenarrative.com"
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Visit Website
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 mr-1"
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


                        {/* card4- OpClean Website */}
                        <div className="flex max-w-lg mx-auto bg-white border overflow-hidden border-gray-200 rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-zinc-900">
                            <div className="flex flex-col p-4 dark:bg-yellow-900 bg-slate-300 shadow-xl">

                                <div className="flex">
                                    <div className="flex flex-col justify-between md:mt-2 md:ml-1">
                                        <div>
                                            <Image
                                                className="bg-white dark:bg-stone-300 object-contain rounded-xl"
                                                width={180}
                                                height={180}
                                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1693082999/OpClean/OpCleanLOGO.Portfolio_m9ellq.png"
                                                alt="image of Website Logo"
                                            />
                                        </div>
                                        <div className="w-40 mt-2">
                                            <a href="#">
                                                <h2
                                                    className="text-sm  md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16">
                                                    OpClean
                                                </h2>
                                                <h3 className="text-xs md:text-sm text-yellow-300 italic">
                                                    Front-End Application
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block ml-4">
                                        <div className="mx-2">
                                            <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">The purpose of the Rewrite the Narrative Workshops is to empower individuals to transform their lives by reshaping their personal narratives. These workshops help participants align their thoughts and words with their true aspirations, enabling them to understand how to fulfill their deepest desires. </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom half of MCP Card */}
                                <div className="flex flex-col mt-2 md:mt-4">

                                    {/* Tech Stack Used DIV */}
                                    <div className="hidden md:flex w-fit">

                                        {/* NextJs */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"
                                                        alt="NextJs Badge"
                                                        title="NextJs"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Tailwind CSS */}
                                        <div className="m-0.5">
                                            <div>
                                                <img
                                                    className="rounded-sm w-fit mx-auto bg-white"
                                                    src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                                    alt="Tailwind CSS Badge"
                                                    title="Tailwind CSS"
                                                />
                                            </div>
                                        </div>

                                        {/* GitHub */}
                                        <div className="m-0.5">
                                            <div>
                                                <Link href="https://github.com/JayMy45/Done-Capstone" target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="rounded-sm w-fit mx-auto bg-white hover:bg-indigo-500"
                                                        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                                        alt="GitHub Badge"
                                                        title="GitHub"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mx-auto md:mx-0 md:mt-4">
                                        <Link href="https://op-clean-exteriors.vercel.app/"
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Visit Website
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 ml-2 mr-1"
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