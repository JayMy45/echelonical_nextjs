import { techStack } from "app/data/techStack"
import Link from "next/link"

export const metadata = {
    title: 'Skills - Jeremy Myers',
    description: 'List of Skills',
}

export default function Page() {
    return (
        <>

            <div className="mt-5 text-center">
                <div
                    className="py-8 h-full relative m-3 md:mx-12 rounded-xl shadow-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1689015296/Echelonical/3A9F6061-4BD3-4691-9073-1D4B4934F31A_1_105_c_k3m479.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right 17%",
                    }}
                >

                    <h1 className="font-bold text-4xl md:text-7xl text-slate-100">Skills</h1>

                    <div className="p-2 md:p-10 mt-3 md:mt-10 mx-auto max-w-sm md:max-w-5xl">
                        <div className="grid grid-cols-3 gap-7">
                            {techStack.map(({ id, techName, techLogo, majorTech }) => (
                                <div className="mx-auto" key={`tech--${id}`}>
                                    <Link
                                        href={`/pages/skills/${id}`}
                                        className="">
                                        <p className="text-xs md:text-base text-slate-200">{techName}</p>
                                        <div className="">
                                            <img className="rounded-xl w-12 h-12 p-1 md:w-24 md:h-24 mx-auto bg-white" src={techLogo} alt={techName} title={"My journey with " + techName} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


