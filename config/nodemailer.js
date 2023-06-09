import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
console.log("USER====");
console.log(process.env.USER);
console.log(process.env.MONGO_URL);
console.log("USER====");
const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

export default transport;