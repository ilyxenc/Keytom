const { link } = require('../config');

const { sendLetter } = require('./mail');

const mainGET = (req, res) => {
    res.render('./pages/index', {
        link, current: {
            about: "",
            roadmap: "",
            tech: "",
            tokenomics: "",
            partnership: "",
        }
    });
}

const aboutGET = (req, res) => {
    res.render('./pages/about', {
        link, current: {
            about: "current",
            roadmap: "",
            tech: "",
            tokenomics: "",
            partnership: "",
        }
    });
}

const roadmapGET = (req, res) => {
    res.render('./pages/roadmap', {
        link, current: {
            about: "",
            roadmap: "current",
            tech: "",
            tokenomics: "",
            partnership: "",
        }
    });
}

const techGET = (req, res) => {
    res.render('./pages/tech', {
        link, current: {
            about: "",
            roadmap: "",
            tech: "current",
            tokenomics: "",
            partnership: "",
        }
    });
}

const tokenomicsGET = (req, res) => {
    res.render('./pages/tokenomics', {
        link, current: {
            about: "",
            roadmap: "",
            tech: "",
            tokenomics: "current",
            partnership: "",
        }
    });
}

const partnershipGET = (req, res) => {
    res.render('./pages/partnership', {
        link, current: {
            about: "",
            roadmap: "",
            tech: "",
            tokenomics: "",
            partnership: "current",
        }
    });
}

const subscriptionPOST = (req, res) => {
    const data = req.body
    delete data.rules

    const subject = req.params.page

    let text = `The message came from <a href="http://95.163.242.213/${subject}">"${subject}"</a> page<br />Data about client: ${JSON.stringify(data)}`

    sendLetter(text, subject)

    res.send(JSON.stringify({ message: "ok" }))
}

module.exports = {
    mainGET,
    aboutGET,
    roadmapGET,
    techGET,
    tokenomicsGET,
    partnershipGET,
    subscriptionPOST
}