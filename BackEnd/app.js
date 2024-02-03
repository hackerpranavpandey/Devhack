const nodemailer = require('nodemailer');

const html = `
    <h1>Hello from IITDH</h1>
    <p>This is a test email.</p>
`;

async function main() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Change this to 587 if using TLS
        secure: true, // Set to false if using TLS
        auth: {
            user: 'email-sender',
            pass: 'password', // Replace with the actual password
        },
        tls: {
            ciphers: 'SSLv3',
            minVersion: 'TLSv1.2',
        },
    });
    try {
        const info = await transporter.sendMail({
            from: 'sender-mail',
            to: 'receiver-mail',
            subject: 'Test Email from IITDH',
            html: html,
        });
        console.log("Message sent: " + info.messageId);
    } catch (e) {
        console.log(e);
    }
}
main().catch(e => console.log(e));