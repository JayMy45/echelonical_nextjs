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
                        <h3></h3>
                        <p></p>
                    </div>{/*service */}

                    <div className="service">
                        <h3></h3>
                        <p></p>
                    </div>{/*service */}

                    <div className="service">
                        <h3></h3>
                        <p></p>
                    </div>{/*service */}
                </div>
            </section>


            <Link href={"#work"} className="btn">
                <h1>My Work</h1>
            </Link>
        </>

    )
}