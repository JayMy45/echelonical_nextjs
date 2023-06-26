export default function AboutMe() {
    return (
        <>
            {/* About Me */}
            <div className="border-2 px-5 rounded-xl mb-5 mt-5" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">I am a passionate learner with a deep interest in understanding various subjects. After exploring different career paths, I have found software development to be both engaging and rewarding. Although software development has always been of interest to me, I didn't pursue it right away due to various circumstances and self-doubt. However, my love for finding technological solutions to everyday problems has grown and solidified my decision to pursue a career in software development. My previous experiences, including working as a biomedical researcher, field application scientist, and facility manager, have helped me develop the grit, strength, and patience needed to overcome complex and unexpected challenges. I am now excited to have the opportunity to learn and grow as a software developer.</p>

                <div className="about-me__body">
                    <p></p>
                    <p></p>
                </div>
                <img src="" alt="" />

                {/* my work */}
                <section className="my-work" id="work">
                    <h2 className="section__title">My Work</h2>
                    <p className="section__subtitle"></p>

                    <div className="portfolio">
                        <a href="#" className="portfolio__item">
                            <img src="" alt="" className="portfolio__img" />
                        </a>
                    </div>

                </section>
            </div>
        </>
    )
}