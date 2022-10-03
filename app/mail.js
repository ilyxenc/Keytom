const nodemailer = require('nodemailer');

require('dotenv').config()

const helloParams = JSON.parse(process.env.helloParams)
<<<<<<< HEAD

=======
>>>>>>> 4ef5a545e92296adbe2a66b4190a0c9903502389
const officeParams = JSON.parse(process.env.officeParams)

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