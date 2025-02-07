import node from "./../../assets/skills/node.svg"
import react from "./../../assets/skills/react.svg"
import express from "./../../assets/skills/express.svg"
import java from "./../../assets/skills/java.svg"
import lombok from "./../../assets/skills/Lombok.png"
import spring from "./../../assets/skills/spring.svg"
import javascript from "./../../assets/skills/javascript.svg"
import postgreSQL from "./../../assets/skills/postgresql.svg"
import redux from "./../../assets/skills/redux.svg"
import typeScript from "./../../assets/skills/typescript.svg"
import typeOrm from "./../../assets/skills/TypeORM.png"
import rubyOnRails from "./../../assets/skills/rails.svg"
import ruby from "./../../assets/skills/ruby.svg"
import reactNative from "./../../assets/skills/reactNative.png"
import golang from "./../../assets/skills/go.svg"
import gin from "./../../assets/skills/gin.svg"
import materialUi from "./../../assets/skills/MUI.svg"
import python from "./../../assets/skills/python.svg"
import django from "./../../assets/skills/django.svg"
import sqLite from "./../../assets/skills/sqLite.svg"
import bootstrap from "./../../assets/skills/bootstrap.svg"
import nvidiaNemotron from "./../../assets/skills/nvidiaNemotron.png"
import angular from "./../../assets/skills/angular.svg"
import mongodb from "./../../assets/skills/mongodb.svg"
import sequelize from "./../../assets/skills/sequelize.svg"
import mySql from "./../../assets/skills/mySql.svg"
import docker from "./../../assets/skills/docker.svg"
import fastApi from "./../../assets/skills/fastApi.svg"
import cohere from "./../../assets/skills/cohere.svg"

export const projects = [
    {
        id: "tutor_ia",
        title: "TutorIA",
        videoId: 'TNv5wl-2npc',
        tecnologies: [java, spring, javascript, nvidiaNemotron, python, angular, fastApi, mongodb],
        repositoryLink: "https://github.com/Henry-TutorIA",
        deployLink: "https://sushi-chatbot.vercel.app",
        inProgress: false
    },
    {
        id: "sushi_chatbot",
        title: "Sushi Chatbot",
        videoId: 'qpLnSc69CQQ',
        tecnologies: [node, express, mongodb, react, typeScript, cohere],
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
        tecnologies: [typeScript, react, typeOrm, postgreSQL, redux, node],
        repositoryLink: "https://github.com/LeyAylen6/NaturalezaXtreme",
        deployLink: "https://naturaleza-xtreme.vercel.app/",
        inProgress: false
    }, {
        id: "stock_controller",
        title: "Stock Controller",
        videoId: '',
        tecnologies: [golang, gin, typeScript, react],
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
        tecnologies: [java, spring, react, bootstrap],
        repositoryLink: "https://github.com/LeyAylen6/Mini-API",
        inProgress: false
    }, {
        id: "nancy_store",
        title: "Nancy Store",
        videoId: '',
        tecnologies: [java, spring, lombok, reactNative, typeScript],
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
        tecnologies: [ruby, rubyOnRails, typeScript, react, materialUi, sqLite],
        repositoryLink: "https://github.com/LeyAylen6/earthquakes",
        deployLink: "",
        inProgress: false
    }
]