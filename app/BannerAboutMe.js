export default function BannerAboutMe() {


    return (
        <>
            <div className="py-20 h-full" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1687974820/Echelonical/IMG_0672_kkhlbm.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="container mx-auto px-6 mt-40">
                    <h2 className="text-5xl font-bold text-white mb-2 uppercase">About Me</h2>
                    <h3 className="text-2xl mb-8 text-gray-200">Jeremy Myers</h3>
                    <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
                        Explore Projects
                    </button>
                </div>
            </div>
        </>
    )
}