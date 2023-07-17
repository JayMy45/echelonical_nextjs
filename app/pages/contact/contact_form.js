'use client'

export default function ContactForm() {

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };
        console.log(data);
        const response = await fetch('/api/contact.js', {
            method: 'POST',
            headers: {
                ContentType: 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('response worked');
            event.target.reset();
        }
        if (!response.ok) {
            console.log('Error sending message');
        }
    }


    return (
        <>
            <form className="p-2 md:p-7 md:ml-20" onSubmit={handleSubmit}>

                {/* name */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg" htmlFor="name">Name</label>
                    <input
                        id="name"
                        className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12"
                        required
                        type="text"
                        minLength={2}
                        maxLength={150}
                        autoComplete="off"
                    />
                </div>

                {/* email */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg" htmlFor="email">email</label>
                    <input
                        id="email"
                        className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12"
                        required
                        type="email"
                        minLength={5}
                        maxLength={150}
                        autoComplete="off"
                    />
                </div>

                {/* message */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold" htmlFor="message">Send a Message</label>
                    <textarea
                        id="message"
                        className="p-2 text-black bg-gray-200 rounded-md md:w-11/12"
                        name="message"
                        rows={4}
                        minLength={10}
                        maxLength={500}
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