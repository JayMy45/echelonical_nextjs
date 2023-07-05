import GoodBanner from "./GoodBanner_AboutMe";
import GoodPortfolio from "./GoodPortfolio";
import Houston from "./Houston";


export default function Goods() {


    return (
        <>
            <div className="relative w-screen h-screen">
                <div className="absolute w-1/2 h-1/2 border-2 top-0 left-0">
                    01
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 top-0 right-0">
                    <GoodBanner />
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 bottom-0 left-0">
                    03
                    <GoodPortfolio />
                </div>
                <div className="absolute w-1/2 h-1/2 border-2 bottom-0 right-0">
                    04
                </div>
                <div className="absolute w-1/4 h-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    05
                    <Houston />
                </div>
            </div>

        </>
    )
}