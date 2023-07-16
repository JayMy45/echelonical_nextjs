import Link from "next/link";

export default function TechStack() {
    return (
        <>
            <Link href="pages/skills">
                <div
                    // https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg
                    className="py-8 h-full relative rounded-xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1689015296/Echelonical/3A9F6061-4BD3-4691-9073-1D4B4934F31A_1_105_c_k3m479.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "right 17%",
                    }}
                >



                    <div className="absolute bottom-0 right-0 p-6 text-4xl font-bold text-white uppercase">
                        <h2>Skills</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}