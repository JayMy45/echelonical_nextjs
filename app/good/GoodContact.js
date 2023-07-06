import Link from "next/link";

export default function Contact() {
    return (
        <>

            <div className="text-3xl font-bold text-white mb-1 uppercase mb-10 w-fit top-0 right-0">
                Contact Me
            </div>
            <div className="flex justify-between bg-slate-100 rounded-xl p-0 dark:bg-slate-800">
                <div className="flex flex-col my-auto mx-auto p-5">
                    <h2>
                        jnmyers774@gmail.com
                    </h2>
                    <Link href="https://www.linkedin.com/in/jeremynmyers/">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/JayMy45">
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
        </>
    )
}