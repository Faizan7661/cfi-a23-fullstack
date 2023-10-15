import nodemailer from 'nodemailer';

async function sendEmail(email, verificationToken) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'mail.mdfaizan.com',
            port: 465,
            auth: {
                user: 'hi@mdfaizan.com',
                pass: 'Faizan@6432'
            }
        });

        const verificationLink = `http://172.25.222.167:5002/api/user/verify-email?token=${verificationToken}`;

        let info = await transporter.sendMail({
            from: `E-Library <hi@mdfaizan.com>`,
            to: email,
            subject: "User Registration Successful!",
            html: `<h1>Verify Your Email</h1><p>Click the following link to verify your email: <a href ="${verificationLink}">Verify Email</a></p>`,
        });

        console.log(`Message Sent to: %s`, info.messageId);
        return { status: true };
    } catch (error) {
        console.error(error);
        return { status: false, error: error.message }; 
    }
}

export default sendEmail;




// code for sending email in a schedule

/*

import nodemailer from 'nodemailer';

async function sendEmail(emailBody) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'mail.mdfaizan.com',
            port: 465,
            auth: {
                user: 'hi@mdfaizan.com',
                pass: 'Faizan@6432'
            }
        });

        // const verificationLink = `http://172.25.222.167:5001/api/user/verify-email?token=${verificationToken}`;

        let info = await transporter.sendMail({
            from: `E-Library <hi@mdfaizan.com>`,
            to: emailBody.to,
            subject:emailBody.subject,
            // text:"Hi This is a sample text",
            html: emailBody.html
        });

        console.log(`Message Sent to: %s`, info.messageId);
        return { status: true };
    } catch (error) {
        console.error(error);
        return { status: false, error: error.message }; 
    }
}

export default sendEmail;



*/