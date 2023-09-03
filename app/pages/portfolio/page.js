import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "app/data/portfolioData";

export const metadata = {
    title: 'Portfolio - JNM',
    description: 'List of Projects',
}


export default function Page() {
    return (
        <>
            {/* portfolio container*/}
            <div className="flex flex-cols md:border-t md:mt-5">
                <div className="mx-auto">

                    <h2 className="font-bold text-slate-950 dark:text-gray-200 text-4xl text-center mb-6 mt-6">Portfolio</h2>

                    {/* Main Card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-5">

                        {/* Card*/}
                        {
                            portfolioData.map(({ id, name, type, description, borderColor, demoType, containerBackgroundColor, imageBackgroundColor, image, tech, link, textColor }) => (
                                <div
                                    key={`portfolio--${id}`}
                                    className={`flex max-w-lg mx-auto bg-white border overflow-hidden ${borderColor} rounded-xl md:rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700`}
                                >
                                    <div className={`flex flex-col p-4 ${containerBackgroundColor} shadow-xl`}>
                                        <div className="flex">
                                            <div className="flex flex-col justify-between md:mt-2 md:ml-1">
                                                <div>
                                                    <Image
                                                        className={`${imageBackgroundColor} object-contain rounded-xl`}
                                                        width={180}
                                                        height={180}
                                                        src={image}
                                                        alt="image of front-end stack capstone"
                                                    />
                                                </div>
                                                <div className="w-40 mt-2">
                                                    <a href="#">
                                                        <h2 className="text-sm md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:h-16">
                                                            {name}
                                                        </h2>
                                                        <h3 className={`text-xs md:text-sm ${textColor} italic`}>
                                                            {type}
                                                        </h3>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hidden md:block ml-4">
                                                <div className="mx-2">
                                                    <p className="hidden md:block font-normal text-gray-700 dark:text-gray-300">{description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom half of Card */}
                                        <div className="flex flex-col mt-2 md:mt-4">

                                            {/* Tech Stack Used Badges*/}
                                            <div className="hidden md:flex w-fit">
                                                {
                                                    tech.map(({ techName, badgeImage, github, majorTech }) => (
                                                        // if the tech is a showcase skill then render the badge within portfolio card
                                                        majorTech
                                                            // if github link exists, render badge with link to
                                                            ? github
                                                                ? <div className="m-0.5" key={`${techName}--${tech.id}`}>
                                                                    <div>
                                                                        <Link href={github}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <img
                                                                                className="rounded-sm w-fit mx-auto hover:rounded-full"
                                                                                src={badgeImage}
                                                                                alt={`${techName} logo`}
                                                                                title={`${techName}`} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                : <div className="m-0.5" key={`${techName}--${tech.id}`}>
                                                                    <div>
                                                                        <img
                                                                            className="rounded-sm w-fit mx-auto"
                                                                            src={badgeImage}
                                                                            alt={`${techName} logo`}
                                                                            title={`${techName}`} />
                                                                    </div>
                                                                </div>
                                                            : null
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        {/* Project Button */}
                                        <div className="mx-auto md:mx-0 md:mt-4">
                                            {
                                                demoType === 'Visit Website'
                                                    ? <Link href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        {demoType}
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
                                                    : <Link href={`/pages/portfolio/${id}`}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        {demoType}
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
                                            }

                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                {/* card containerEnd */}

            </div>
            {/* portfolioContainerEnd */}
        </>
    )
}