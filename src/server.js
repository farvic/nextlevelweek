// import 'express';


// Data

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89991911199",
        bio: "Entusiasta das melhores tecnologias dequímica avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "89991911199",
        bio: "Entusiasta das melhores tecnologias de física avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Física",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

// Functionalities

function getSubject(subjectNumber) {
    const position = +subjectNumber-1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function giveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data) > 0

    /* if the page receives data, it adds the new proffy and redirects
    to the study page
    */
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

// Server

const express = require('express')
const server = express()

// Nunjucks (template engine) config
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// static files configuration (css, scripts, images)
    .use(express.static("public"))
// app routes
    .get("/", pageLanding)

    .get("/study", pageStudy)

    .get("/give-classes", giveClasses)
    // server start
    .listen(5500)

