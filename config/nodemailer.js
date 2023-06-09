import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
console.log("USER====");
console.log(process.env.MONGO_URL);
console.log(process.env.USER_EMAIL);
console.log("USER====");
const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS
    }
});

export default transport;