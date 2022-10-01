const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: '',
    port: '',
    secure: true,
    auth: {
        user: '',
        pass: ''
    }

});

const sendLetter = (data, subject) => {
    transporter.sendMail({
        from: '', // почта, указанная выше
        to: '', // список через запятую, кому необходимо отправить письмо
        subject, // тема письма
        html: data,
    }, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

module.exports = {
    sendLetter
}