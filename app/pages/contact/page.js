import ContactForm from "./contact_form";
import ContactIcon from "./contact_icon";

export const metadata = {
    title: 'Contact Page',
    description: 'Connect with Jeremy Myers',
}

export default function Contact() {
    return (
        <div className="mt-10">
            <div
                className="py-7 h-full relative m-3 rounded-xl flex flex-col justify-center items-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.63),rgba(0,0,0,0.63)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="p-0 md:px-5 text-center">
                    <h1 className="font-bold text-4xl md:text-6xl mt-6 md:mt-10">Contact Me</h1>
                </div>
                <div className="flex flex-col md:flex-row w-screen">
                    <div className="w-full md:w-1/2 p-10 md:ml-12">
                        <ContactForm />
                    </div>
                    <div className="w-full md:w-1/2 max-h-screen flex items-center justify-center">
                        <ContactIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
