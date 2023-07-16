export default function ContactForm() {
    return (
        <>
            <form className="p-2 md:p-7 md:ml-20">
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg" htmlFor="name">Name</label>
                    <input className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12" type="text" id="name" autoComplete="off" />
                </div>
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg" htmlFor="email">email</label>
                    <input className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12" type="email" id="email" autoComplete="off" />
                </div>
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold" htmlFor="message">Send a Message</label>

                    <textarea
                        className="p-2 text-black bg-gray-200 rounded-md md:w-11/12"
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Send me an email"
                    />
                </div>
                <div>
                    <button className="bg-slate-500 px-2 py-2 w-24 rounded-lg font-medium" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}