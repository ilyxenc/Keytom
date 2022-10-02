const nodemailer = require('nodemailer');

const sendLetter = (data, subject, to) => {
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