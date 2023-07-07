import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div
                className="py-20 h-full rounded-xl relative"
                style={{
                    backgroundColor: "#2d3748", // Replace with your desired color
                    height: "100%", // Adjust the height to your needs
                    width: "100%", // Adjust the width to your needs
                }}
            >
                <div className="absolute top-0 right-0 p-6 text-3xl font-bold text-white uppercase">
                    <h2>Contact Me</h2>
                </div>
                {/* <div className=" inline-block"> */}
                <div className="flex justify-center justify-around mt-10 mx-auto border-2 p-5">
                    <h2 className="p-1">
                        jnmyers774@gmail.com
                    </h2>
                    <Link className="p-1" href="https://www.linkedin.com/in/jeremynmyers/">
                        <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
                    </Link>
                    <Link className="p-1" href="https://github.com/JayMy45">
                        GitHub
                    </Link>
                </div>
                <img
                    className="w-48  md:hidden h-auto md:rounded-none"
                    src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688703204/Echelonical/portrait.self.png"
                    alt=""
                    width="384"
                    height="512"
                />
            </div>
        </>
    )
}