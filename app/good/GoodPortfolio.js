import Image from "next/image";

export default function GoodPortfolio() {
    return (
        <>
            <div className="border-2 max-w-sm rounded overflow-hidden shadow-lg">
                <div>
                    Work
                </div>
                <Image
                    width={200}
                    height={200}
                    className="bg-white object-cover "
                    src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1687918473/Echelonical/DONE-LOGO_3_abwlln.png"
                    alt="image of full stack capstone"
                />
                <div className="p-2">
                    <button className="border-2 rounded-full p-2 ">Done?!</button>
                    <button className="border-2 rounded-full p-2 ml-1">Music City Pressure</button>
                </div>
            </div>
        </>
    )
}