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

const subscriptionPOST = async (req, res) => {
    const data = req.body
    delete data.rules

    const subject = req.params.page
    const to = (subject == "partnership") ? "office@keytom.io" : "hello@keytom.io"

    console.log(to)

    let text = `The message came from <a href="${link}${subject}">"${subject}"</a> page<br />Data about client: ${JSON.stringify(data)}`

    try {
        const result = await sendLetter(text, subject, to)

        console.log(result)

        res.send(JSON.stringify({ message: "ok" }))
    } catch (err) {
        console.log(err)
        res.send(JSON.stringify({ message: "error" }))
    }
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