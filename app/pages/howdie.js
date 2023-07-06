import Link from "next/link.js";

export default function Howdie() {
    return (
        <>
            {/* Introduction/Howdie */}
            <div className="border-2 dark:bg-gray-200 mt-4 ml-20 bg-gray-700 opacity-75 w-96 h-28 rounded-2xl px-10 py-2" id="home">
                <div className="border-1 mt-2">
                    <h1 className="font-bold text-3xl text-yellow-700">
                        Jeremy Myers
                    </h1>
                    <p className="dark:text-purple-800 text-purple-300 mt-1 ml-3">
                        <span className="font-bold text-xl"> &lt; </span>
                        <span className="font-semibold text-lg">full-stack dev</span>
                        <span className="font-bold text-xl"> /&gt;</span>
                    </p>
                    <img src="" alt="" />
                </div>
            </div>


        </>

    )
}