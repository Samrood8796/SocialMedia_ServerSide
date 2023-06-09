import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS
    }
});

export default transport;