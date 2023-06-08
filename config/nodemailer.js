import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

export default transport;