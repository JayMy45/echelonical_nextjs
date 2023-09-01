import Layout from "app/layout"

export default function Page({ params }) {
    return (
        <>
            <div className="mt-10">
                <h2 className="text-center uppercase">detailed skills {params.id} </h2>
            </div>
            <section>
                <div className="m-5 rounded-lg h-screen border">

                </div>
            </section>
        </>
    )
}