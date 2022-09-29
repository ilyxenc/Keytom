const { link } = require('../config');

const mainGET = (req, res) => {
    res.render('./pages/index', { link });
}

const aboutGET = (req, res) => {
    res.render('./pages/about', { link });
}

const roadmapGET = (req, res) => {
    res.render('./pages/roadmap', { link });
}

const techGET = (req, res) => {
    res.render('./pages/tech', { link });
}

const tokenomicsGET = (req, res) => {
    res.render('./pages/tokenomics', { link });
}

const partnershipGET = (req, res) => {
    res.render('./pages/partnership', { link });
}

const subscriptionPOST = (req, res) => {
    console.log(req.body)

    res.send(JSON.stringify({message: "ok"}))
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