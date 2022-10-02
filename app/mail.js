const nodemailer = require('nodemailer');

const sendLetter = (data, subject, to) => {

    const transporter = nodemailer.createTransport(
        (subject == 'subscription') ? helloParams : officeParams
    );

    return transporter.sendMail({
        from: to,
        to: 'ilya.goldobin1@gmail.com',
        subject,
        html: data,
    });
}

module.exports = {
    sendLetter
}