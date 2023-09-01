import { techStack } from "app/data/techStack"
import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }) {
    const { id } = params
    const tech = techStack.find((item) => item.id === Number(id))

    return (
        <>
            <div className="mt-10">

                <h2 className="text-center uppercase">detailed skills {params.id} </h2>
            </div>

            <section>
                <div className="button rounded-lg border w-fit p-2 ml-16 mt-2 hover:bg-indigo-700 hover:font-bold hover:border-yellow-400">
                    <a href="/pages/skills">
                        <h3 className="text-center">Back to Skills</h3>
                    </a>
                </div>
                <div className="m-5 rounded-lg h-screen border">
                    <div className="ml-10 mt-10 bg-white p-3 rounded-md border w-fit">
                        <Link href={tech.techWebsite}>
                            <Image
                                src={tech.techLogo}
                                width={180}
                                height={180}
                                alt={tech.techName}
                                title={tech.techName + ` website`}
                            />
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}