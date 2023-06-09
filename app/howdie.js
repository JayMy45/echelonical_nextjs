import Link from "next/link.js";

export default function Howdie() {
    return (
        <>
            {/* Introduction/Howdie */}
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hi, I am <strong>Jeremy Myers</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">full-stack dev</p>
                <img src="" alt="" />
            </section>

            {/* My services */}
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div className="service">
                        <h3>Design + Develop</h3>
                        <p>With a heart filled with passion and creativity, I dive into the world of web application design and development, where every line of code becomes a brushstroke on a canvas of possibilities. The satisfaction of transforming abstract concepts into functional and aesthetically pleasing digital experiences is a constant source of joy and fulfillment. From wireframing to final deployment, I revel in the journey of crafting seamless user interfaces and bringing ideas to life in the virtual realm.</p>
                    </div>{/*service */}

                    <div className="service">
                        <h3>Mechanic</h3>
                        <p>
                            Immersed in the world of grease and engines, my love for fixing cars runs deep. With every turn of a wrench and the satisfaction of solving mechanical puzzles, I find solace in the art of troubleshooting and restoring automobiles to their former glory. From diagnosing complex issues to fine-tuning engines, the exhilaration of hearing a purring motor and witnessing a smoothly running vehicle ignites a passion that fuels my dedication to the craft of automotive repair.</p>
                    </div>{/*service */}

                    <div className="service">
                        <h3>WordPress</h3>
                        <p>Armed with a keen eye for design and an expert understanding of WordPress, I effortlessly weave together themes, plugins, and customizations to create stunning and dynamic websites. Each pixel is meticulously placed, colors are carefully selected, and typography is thoughtfully curated to ensure an engaging and visually striking user experience. With WordPress as my canvas, I transform ideas into beautifully crafted websites that captivate and leave a lasting impression.</p>
                    </div>{/*service */}
                </div>
            </section>

            {/* About Me */}

            <section className="About me" id="about">
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
            </section>

        </>

    )
}