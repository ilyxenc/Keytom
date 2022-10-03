const nodemailer = require('nodemailer');

require('dotenv').config()

const helloParams = JSON.parse(process.env.helloParams)
const officeParams = JSON.parse(process.env.officeParams)

const sendLetter = (data, subject, to) => {

    const transporter = nodemailer.createTransport(
        (subject == 'subscription') ? helloParams : officeParams
    );

    return transporter.sendMail({
        from: to,
        to,
        subject,
        html: data,
    });
}

module.exports = {
    sendLetter
}