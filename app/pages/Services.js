export default function Services() {
    return (
        <>
            {/* My services */}
            <div className="border-2 mt-5 mb-5 pt-1 pb-10 px-5 rounded-xl" id="services">
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
            </div>
        </>
    )
}