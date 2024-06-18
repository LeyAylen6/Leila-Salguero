import rickAndMorty from './../../assets/proyects/rickAndMorty.mp4'
import henryVideogames from './../../assets/proyects/henryVideogames.mp4'
import natureXtreme from './../../assets/proyects/NatureXtreme.mp4'
import earthquakes from './../../assets/proyects/earthquakes.mp4'
import stockControll from './../../assets/proyects/stockControll.mp4'
import commingSoon from "./../../assets/proyects/commingSoon.gif"
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

export const projects = [
    {
        id: "nancy_store",
        title: "Nancy Store",
        image: commingSoon,
        tecnologies: [java, spring, lombok, reactNative, typeScript],
        repositoryLink: "https://github.com/LeyAylen6/nancy-store",
        deployLink: "",
        deploy: false,
        inProgress: true
    }, {
        id: "stock_controll",
        title: "Stock Controll",
        image: stockControll,
        tecnologies: [python, django, sqLite, bootstrap],
        repositoryLink: "https://github.com/LeyAylen6/stock-controll",
        deployLink: "",
        deploy: false,
        inProgress: false
    }, {
        id: "earthquakes",
        title: "Earthquakes",
        image: earthquakes,
        tecnologies: [ruby, rubyOnRails, sqLite, typeScript, react, materialUi],
        repositoryLink: "https://github.com/LeyAylen6/earthquakes",
        deployLink: "",
        deploy: false,
        inProgress: false
    },
    {
        id: "stock_controller",
        title: "Stock Controller",
        image: commingSoon,
        tecnologies: [golang, gin, typeScript, react],
        repositoryLink: "https://github.com/LeyAylen6/stock-controller",
        deployLink: "",
        deploy: false,
        inProgress: true
    }, {
        id: "nature_xtreme",
        title: "NatureXtreme",
        image: natureXtreme,
        tecnologies: [typeScript, react, node, typeOrm, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/NaturalezaXtreme",
        deployLink: "https://naturaleza-xtreme.vercel.app/",
        deploy: true,
        inProgress: false
    }, {
        id: "henry_videogames",
        title: "Henry Videogames",
        image: henryVideogames,
        tecnologies: [javascript, react, node, express, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/Videogames",
        deployLink: "https://henry-videogames-zeta.vercel.app/",
        deploy: true,
        inProgress: false
    }, {
        id: "rick_and_morty",
        title: "Rick And Morty",
        image: rickAndMorty,
        tecnologies: [javascript, react, node, express, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/Rick-Morty",
        deployLink: "https://rick-and-morty-one-tan.vercel.app/",
        deploy: true,
        inProgress: false
    },
]