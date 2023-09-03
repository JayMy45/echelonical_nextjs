import { portfolioData } from "app/data/portfolioData"
import { techStack } from "app/data/techStack"
import Link from "next/link"

export default async function Page({ params }) {
    const { id } = params
    const project = portfolioData.find((item) => item.id === Number(id))
    return (
        <>
            <section className="mt-10">
                <div className="py-20 min-h-screen bg-slate-200" style={{
                    backgroundImage: `${project.detailsBackgroundURL}`,
                    backgroundSize: "contain", // Updated property
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-1">
                        <h2 className="text-5xl font-bold text-white uppercase">{project.name}</h2>
                        <h3 className="text-2xl text-gray-700 bg-stone-300 w-1/4 px-5 py-2 rounded-lg text-center mt-5">{project.type}</h3>

                        <div className="border-2 border-slate-900 bg-slate-500 bg-opacity-70 w-1/4 p-3 pr-5 mt-2 rounded-lg">
                            <h3 className="text-2xl text-black bg-orange-500 w-fit px-3 py-1 rounded-lg mb-3 mx-auto">Tech Stack</h3>

                            {/* Tech Stack Used DIV */}
                            <div className="grid grid-cols-4 p-1 w-fit rounded-xl mt-1 ml-2 border-4 border-slate-300 bg-stone-900 bg-opacity-50 shadow-lg">
                                {
                                    project.tech.map((item) => {
                                        return techStack.map((tech) => {
                                            if (tech.techName === item.techName) {
                                                return <div className="p-2">
                                                    <div className="">
                                                        <img className="rounded-2xl w-12 h-12 mx-auto bg-white p-1" src={tech.techLogo} alt={tech.techName} title={tech.techName} />
                                                    </div>
                                                </div>
                                            }
                                        })
                                    })

                                }
                            </div>
                        </div>
                        <button className="text-white uppercase border-4 border-yellow-400 px-8 py-4 font-bold tracking-wider shadow-lg mt-20 bg-orange-500">
                            Under Construction
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}