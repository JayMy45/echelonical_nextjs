import Image from "next/image";
import BannerAboutMe from "./BannerAboutMe";

export default function AboutMe() {
    return (
        <>
            {/* Section Container */}
            <div className="border-t-2 p-10  mb-5 mt-5" id="about">

                {/* Banner */}
                <div className="mt-8">
                    <BannerAboutMe />

                    {/* About Me */}
                    <div
                        className=""
                    >

                        <h2 className="bg-gray-100 opacity-25 p-3 text-gray-700">Who I am</h2>
                        <p className="text-yellow-300">I am a passionate learner with a deep interest in understanding various subjects. After exploring different career paths, I have found software development to be both engaging and rewarding. Although software development has always been of interest to me, I didn't pursue it right away due to various circumstances and self-doubt. However, my love for finding technological solutions to everyday problems has grown and solidified my decision to pursue a career in software development. My previous experiences, including working as a biomedical researcher, field application scientist, and facility manager, have helped me develop the grit, strength, and patience needed to overcome complex and unexpected challenges. I am now excited to have the opportunity to learn and grow as a software developer.</p>

                        <div className="about-me__body">
                            <p></p>
                            <p></p>
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>





            </div>
        </>
    )
}