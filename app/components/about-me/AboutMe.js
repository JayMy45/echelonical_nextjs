export default function AboutMe() {
    return (
        <>
            {/* About Me */}
            <div className="border-2 p-10 rounded-xl mb-5 mt-5" id="about">
                <h2 className=" --about">Who I am</h2>
                <p className=" --about">I am a passionate learner with a deep interest in understanding various subjects. After exploring different career paths, I have found software development to be both engaging and rewarding. Although software development has always been of interest to me, I didn't pursue it right away due to various circumstances and self-doubt. However, my love for finding technological solutions to everyday problems has grown and solidified my decision to pursue a career in software development. My previous experiences, including working as a biomedical researcher, field application scientist, and facility manager, have helped me develop the grit, strength, and patience needed to overcome complex and unexpected challenges. I am now excited to have the opportunity to learn and grow as a software developer.</p>

                <div className="about-me__body">
                    <p></p>
                    <p></p>
                </div>
                <img src="" alt="" />

                {/* portfolio container*/}
                <div className="mt-3" id="work">
                    <div>
                        <h2 className="font-bold text-gray-200 text-4xl text-center mb-10 mt-10">Portfolio</h2>
                        <p className=""></p>

                        {/* card container */}
                        <div className="flex justify-between mt-3">

                            {/* card1 */}
                            <div className="max-w-sm pb-2 bg-white overflow-hidden border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                <img src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1673224064/i49x9t9jknwjytxkkv6k.png" alt="" />
                                <div className="p-4">
                                    <a href="#">
                                        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Done<span></span></h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Demo Project                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                            {/* card2 */}
                            <div className="max-w-sm bg-white border overflow-hidden border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                <img src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1673326489/n7mcg6bcgkhk7qdkuynx.png" alt="" />
                                <div className="p-4">
                                    <a href="#">
                                        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music City Pressure<span></span></h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Demo Project                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* card containerEnd */}
                    </div>
                </div>
                {/* portfolioContainerEnd */}

            </div>
        </>
    )
}