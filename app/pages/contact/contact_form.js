export default function ContactForm() {
    return (
        <>
            <form className="p-4">
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold" htmlFor="name">Name</label>
                    <input className="p-4 bg-gray-200 text-black rounded-md" type="text" id="name" autoComplete="off" />
                </div>
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold" htmlFor="name">email</label>
                    <input className="p-4 bg-gray-200 text-black rounded-md" type="email" id="email" autoComplete="off" />
                </div>
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold" htmlFor="message">Email a Message</label>

                    <textarea
                        className="p-2 text-black bg-gray-200 rounded-md"
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