import Link from "next/link";

export default function ContactIcon() {
    return (
        <>
            <div className="flex justify-center space-x-12 m-1">
                <div>
                    <Link className="p-1" href="https://www.linkedin.com/in/jeremynmyers/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <img className="bg-white rounded-xl w-32 h-32" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688936610/Echelonical/Untitled_design_4_xrvhru.png" alt="linkedIn Logo" />
                    </Link>
                </div>
                <div>
                    <Link className="p-1" href="https://github.com/JayMy45" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <img className="bg-gray-200 rounded-xl w-32 h-32" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935951/Echelonical/Untitled_design_6_swt1g0.png" alt="GitHub Logo" />
                    </Link>
                </div>
            </div>
        </>
    )
}