import Link from "next/link.js";

export default function Howdie() {
    return (
        <>
            {/* Introduction/Howdie */}
            <div className="border-2 dark:bg-gray-200 bg-gray-700 opacity-75 rounded-2xl px-10 py-2" id="home">
                <div className="border-1">
                    <h1 className="font-bold text-4xl text-yellow-500">
                        Jeremy Myers
                    </h1>
                    <p className="dark:text-purple-800 text-purple-300">
                        <span className="font-bold text-xl"> &lt; </span>
                        full-stack dev
                        <span className="font-bold text-xl"> /&gt;</span>
                    </p>
                    <img src="" alt="" />
                </div>
            </div>


        </>

    )
}