import { resources } from "../Skills/constants"

const { java, springBoot, nvidiaNemotron, python, angular, fastApi, mongoDb, cohere, javascript, express, typescript, react, typeOrm, postgreSQL, redux, node, bootstrap, sequelize, docker, mySql, django, sqLite, lombok, MUI, ruby, rails, go, gin, reactNative } = resources

export const projects = [
    {
        id: "tutor_ia",
        title: "TutorIA",
        videoId: 'TNv5wl-2npc',
        tecnologies: [java, springBoot, javascript, nvidiaNemotron, python, angular, fastApi, mongoDb],
        repositoryLink: "https://github.com/Henry-TutorIA",
        deployLink: "https://sushi-chatbot.vercel.app",
        inProgress: false
    },
    {
        id: "sushi_chatbot",
        title: "Sushi Chatbot",
        videoId: 'qpLnSc69CQQ',
        tecnologies: [node, express, mongoDb, react, typescript, cohere],
        repositoryLink: "https://github.com/LeyAylen6/sushi-chatbot",
        deployLink: "https://sushi-chatbot.vercel.app",
        inProgress: false
    }, {
        id: "henry_videogames",
        title: "Henry Videogames",
        videoId: 'POQsO2HTMDU',
        tecnologies: [javascript, react, node, postgreSQL, redux, express],
        repositoryLink: "https://github.com/LeyAylen6/Videogames",
        deployLink: "https://henry-videogames-zeta.vercel.app/",
        inProgress: false
    }, {
        id: "rick_and_morty",
        title: "Rick And Morty",
        videoId: 'A5jKQXZmlPg',
        tecnologies: [javascript, react, node, postgreSQL, redux, express],
        repositoryLink: "https://github.com/LeyAylen6/Rick-Morty",
        deployLink: "https://rick-and-morty-one-tan.vercel.app/",
        inProgress: false
    }, {
        id: "nature_xtreme",
        title: "NatureXtreme",
        videoId: 'wJOjz1aqlDw',
        tecnologies: [typescript, react, typeOrm, postgreSQL, redux, node],
        repositoryLink: "https://github.com/LeyAylen6/NaturalezaXtreme",
        deployLink: "https://naturaleza-xtreme.vercel.app/",
        inProgress: false
    }, {
        id: "stock_controller",
        title: "Stock Controller",
        videoId: '',
        tecnologies: [go, gin, typescript, react],
        repositoryLink: "https://github.com/LeyAylen6/stock-controller",
        deployLink: "",
        inProgress: true
    }, {
        id: "paycash_people",
        title: "Paycash - People",
        videoId: 'S3RMKjXYiMw',
        tecnologies: [react, bootstrap, sequelize, docker, mySql, express, node],
        repositoryLink: "https://github.com/LeyAylen6/paycash",
        deployLink: "https://paycash-seven.vercel.app",
        inProgress: false
    }, {
        id: "people_manager",
        title: "People Manager",
        videoId: 'fXrEyh3P-nk',
        tecnologies: [java, springBoot, react, bootstrap],
        repositoryLink: "https://github.com/LeyAylen6/Mini-API",
        inProgress: false
    }, {
        id: "nancy_store",
        title: "Nancy Store",
        videoId: '',
        tecnologies: [java, springBoot, lombok, reactNative, typescript],
        repositoryLink: "https://github.com/LeyAylen6/nancy-store",
        deployLink: "",
        inProgress: true
    }, {
        id: "stock_controll",
        title: "Stock Controll",
        videoId: 'dfdsMIbYwnE',
        tecnologies: [python, django, sqLite, bootstrap],
        repositoryLink: "https://github.com/LeyAylen6/stock-controll",
        deployLink: "",
        inProgress: false
    }, {
        id: "earthquakes",
        title: "Earthquakes",
        videoId: 'O6FPJke6wTY',
        tecnologies: [ruby, rails, typescript, react, MUI, sqLite],
        repositoryLink: "https://github.com/LeyAylen6/earthquakes",
        deployLink: "",
        inProgress: false
    }
]