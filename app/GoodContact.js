import Link from "next/link";

export default function Contact() {
    return (
        <>
            <Link href="pages/contact">
                <div
                    className="py-7 h-full relative rounded-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute top-0 right-0 p-6 text-4xl font-bold text-white uppercase">
                        <h2>Contact Me</h2>
                    </div>
                </div >
            </Link>
        </>
    )
}