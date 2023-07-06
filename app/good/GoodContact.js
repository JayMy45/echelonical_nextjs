import Link from "next/link";

export default function Contact() {
    return (
        <>


            <div className=" inline-block">
                <div className="flex justify-between bg-slate-100 rounded-xl p-0 dark:bg-slate-800 w-fit">
                    <div className="flex flex-col my-auto mx-auto p-5">
                        <h2 className="p-1">
                            jnmyers774@gmail.com
                        </h2>
                        <Link className="p-1" href="https://www.linkedin.com/in/jeremynmyers/">
                            LinkedIn
                        </Link>
                        <Link className="p-1" href="https://github.com/JayMy45">
                            GitHub
                        </Link>
                    </div>
                    <img
                        className="w-48 h-24 md:hidden h-auto md:rounded-none"
                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688677832/Echelonical/SelfPicture.png"
                        alt=""
                        width="384"
                        height="512"
                    />
                </div>
            </div>
        </>
    )
}