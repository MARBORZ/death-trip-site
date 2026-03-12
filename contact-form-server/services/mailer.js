import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({ name, email, message }) {
  await resend.emails.send({
        from: "Amadi Masuev - Frontend Developer <contact@marborz.one>",
        to: process.env.MAIL_TO,
        reply_to: email,
        subject: `New message from ${name}`,
        text: [
            `New contact message`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            ``,
            `Message:`,
            message,
        ].join("\n"),
    });
}