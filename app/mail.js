const nodemailer = require('nodemailer');

const helloParams = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'hello@keytom.io',
        pass: 'qgsodqesrcjniqsp'
    }
}

const officeParams = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'office@keytom.io',
        pass: 'okahwlcmeijyacvo'
    }
}

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