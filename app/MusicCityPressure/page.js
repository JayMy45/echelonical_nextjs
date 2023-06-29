export default function MusicCityPressure() {
    return (
        <>
            <div className="mt-20">
                <div className="py-20 h-screen" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688071197/Echelonical/musicCityPressure.House_wo5l6f.png')",
                    backgroundSize: "contain", // Updated property
                    // backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-6 mt-40">
                        <h2 className="text-5xl font-bold text-white mt-40 uppercase">Music City Pressure</h2>
                        <h3 className="text-2xl text-gray-200 bg-red-900 w-fit px-5 py-2 rounded-lg ml-3">Backend Capstone</h3>
                        <h3 className="text-2xl mb-8 text-black bg-orange-500 w-fit px-3 py-1 rounded-lg mt-1 ml-3">Tech Stack</h3>
                        <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
                            Check It Out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}