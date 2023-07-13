import BannerAboutMe from "./BannerAboutMe";

export const metadata = {
    title: 'About Me - Jeremy Myers',
    description: 'About Jeremy Myers',
}

export default function Page() {
    return (
        <>
            {/* Section Container */}
            <div className="p-10" id="about">

                {/* Banner */}
                <div className="">
                    <BannerAboutMe />

                    {/* About Me */}
                    <div className="mt-10">
                        <p className="dark:text-white text-black">I am a passionate learner with a deep interest in understanding various subjects. After exploring different career paths, I have found software development to be both engaging and rewarding. Although software development has always been of interest to me, I didn't pursue it right away due to various circumstances and self-doubt. However, my love for finding technological solutions to everyday problems has grown and solidified my decision to pursue a career in software development. My previous experiences, including working as a biomedical researcher, field application scientist, and facility manager, have helped me develop the grit, strength, and patience needed to overcome complex and unexpected challenges. I am now excited to have the opportunity to learn and grow as a software developer.</p>
                    </div>
                </div>
            </div>
        </>
    )
}