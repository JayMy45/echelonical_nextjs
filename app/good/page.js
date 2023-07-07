import GoodBanner from "./GoodBanner_AboutMe";
import Contact from "./GoodContact";
import GoodPortfolio from "./GoodPortfolio";
import TechStack from "./GoodTech";
import Houston from "./Houston";


export default function Goods() {


    return (
        <>


            <div className="relative w-screen h-screen">
                <div className="w-full md:absolute md:w-1/2 h-1/2 border-2 md:top-0 md:left-0 p-3">
                    {/* 01 */}
                    <GoodBanner />
                </div>
                <div className="w-full md:absolute md:w-1/2 h-1/2 border-2 md:top-0 md:right-0 p-3">
                    {/* 02 */}
                    <Contact />
                </div>
                <div className="w-full md:absolute md:w-1/2 h-1/2 border-2 md:bottom-0 md:left-0 p-3">
                    {/* 03 */}
                    <GoodPortfolio />
                </div>
                <div className="w-full md:absolute md:w-1/2 h-1/2 border-2 md:bottom-0 md:right-0 p-3">
                    {/* 04 */}
                    <TechStack />
                </div>
                <div className="hidden md:inline-flex md:absolute md:w-1/4 md:h-1/4 md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
                    {/* 05 */}
                    <Houston />
                </div>
            </div>


        </>
    )
}