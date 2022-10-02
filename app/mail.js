const nodemailer = require('nodemailer');

const sendLetter = (data, subject, to) => {
    return transporter.sendMail({
        from: 'hello@keytom.io',
        to,
        subject,
        html: data,
    });
}

module.exports = {
    sendLetter
}