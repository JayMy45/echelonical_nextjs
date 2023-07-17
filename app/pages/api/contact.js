import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body;
    const data = {
        name,
        email,
        message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: data.email,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not send email. Your message was not sent." });

    }

    return res.status(200).json({ message: "success" });


}
