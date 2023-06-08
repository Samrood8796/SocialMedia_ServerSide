import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

export default transport;