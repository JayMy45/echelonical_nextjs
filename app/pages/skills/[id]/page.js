import { techStack } from "app/data/techStack"
import { portfolioData } from "app/data/portfolioData"
import Image from "next/image"
import Link from "next/link"


export default async function Page({ params }) {
    const { id } = params
    const tech = techStack.find((item) => item.id === Number(id))


    return (
        <>
            <section className="">
                <div className="button rounded-lg border w-fit p-2 ml-16 mt-5 text-black bg-slate-300 bg-opacity-80 hover:bg-indigo-700 hover:font-bold hover:border-purple-800 hover:text-white shadow-lg">
                    <a href="/pages/skills">
                        <h3 className="text-center">Back to Skills</h3>
                    </a>
                </div>
                <div className="m-5 rounded-lg h-full">
                    <div className="flex flex-row w-full border">
                        <div className="w-1/3 p-2">
                            <div className="mx-auto bg-white p-3 rounded-md border w-fit">
                                <Link href={tech.techWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
                        <div className="grid grid-row-2 border w-2/3">
                            <div className="mx-auto my-auto">
                                <h2><span className="font-semibold text-2xl">Projects</span> using <span className="text-yellow-200">{tech.techName}</span></h2>
                            </div>
                            <div className="flex mx-auto my-auto">

                                {
                                    portfolioData && portfolioData.map((portfolioItem, index) => {
                                        return portfolioItem.tech.map((portTech, index) => {
                                            return (
                                                <div key={index}>
                                                    {portTech.techName === tech.techName
                                                        // nested ternary to render links with different opening protocols
                                                        ? portfolioItem.demoType === 'Demo Project'
                                                            //* if true open link on same page
                                                            ? <div className="p-3">
                                                                <Link
                                                                    href={portfolioItem.link}>
                                                                    <Image
                                                                        className="rounded-md w-fit bg-slate-100"
                                                                        src={portfolioItem.image}
                                                                        alt={`${portfolioItem.name} logo`}
                                                                        title={`${portfolioItem.name}`}
                                                                        height={90}
                                                                        width={90}
                                                                    />
                                                                </Link>
                                                            </div>
                                                            //* if false open link in new tab
                                                            : <div className="p-3">
                                                                <Link
                                                                    href={portfolioItem.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Image
                                                                        className="rounded-md w-fit bg-slate-100"
                                                                        src={portfolioItem.image}
                                                                        alt={`${portfolioItem.name} logo`}
                                                                        title={`${portfolioItem.name}`}
                                                                        height={90}
                                                                        width={90}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        : <></>
                                                    }
                                                </div>
                                            );
                                        });
                                    })
                                }

                            </div>

                        </div>
                    </div>
                    <div className="mt-5 border md:mx-44 px-7">
                        <p className="mt-2 text-md text-slate-100">In a world where words held magical powers, 'Anything' was the most mysterious and potent of them all. A word of limitless possibilities, it was revered and feared in equal measure. Many sought to harness its power, but none truly understood it. Those who tried to wield 'Anything' found their lives changed in ways they could never have imagined, and not always for the better. Ultimately, the word 'Anything' became a symbol of the unpredictable nature of life, and a reminder that with great power comes great responsibility. It was said that the origin of 'Anything' lay in the heart of the universe, a creation by the ancient beings who once roamed the cosmos. Over time, as civilizations rose and fell, the word was passed down through the generations, its true nature becoming obscured by myth and legend. In a world dominated by words of destruction and control, 'Anything' represented a glimmer of hope, a chance for change, and a path to a brighter future. But as with all powerful things, it came with a price, and those who sought to use it had to confront their own darkest fears and deepest desires.</p>
                        <p className="mt-2 text-md text-slate-100">One young woman, Elara, embarked on a journey to uncover the true power of 'Anything'. She was a linguamancer, one of the few remaining practitioners of an ancient form of magic based on the power of words. Her quest led her to the far corners of the world, through dark forests and desolate deserts, and into the realms of legend and myth. Along the way, she encountered creatures both wondrous and terrifying, and faced challenges that tested the limits of her strength and determination. In her heart, Elara knew that the key to unlocking the power of 'Anything' lay in understanding its true nature. It was not just a word, but a reflection of the infinite potential of the universe, and of the human spirit. To wield 'Anything' was to embrace the unknown, and to accept the responsibility that came with it.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
