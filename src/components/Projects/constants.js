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
        title: "Nancy Store",
        image: commingSoon,
        description: `E-commerce version Mobile. App para reservas de compras y retiros con take away en almacen local`,
        tecnologies: [java, spring, lombok, reactNative, typeScript],
        repositoryLink: "https://github.com/LeyAylen6/nancy-store",
        deployLink: "",
        deploy: false,
        inProgress: true
    }, {
        title: "Stock Controll",
        image: stockControll,
        description: `Proyecto de Control de Stock. Incluye creacion, modificación, eliminación y obtención de proveedores y productos`,
        tecnologies: [python, django, sqLite, bootstrap],
        repositoryLink: "https://github.com/LeyAylen6/stock-controll",
        deployLink: "",
        deploy: false,
        inProgress: false
    }, {
        title: "Earthquakes",
        image: earthquakes,
        description: `Earthquakes es un proyecto que se encarga de mostrar datos sismológicos de todo el mundo. Consume datos de la api de "earthquake.usgs.gov" y los persiste en la base de datos propia. Ademas cuenta con la creación de comentarios de cada uno de los terremotos. Si bien este proyecto cuenta con una interfaz de usuario su principal objetivo fue obtener conocimientos sobre las tecnologías implementadas en el area Backend.`,
        tecnologies: [ruby, rubyOnRails, sqLite, typeScript, react, materialUi],
        repositoryLink: "https://github.com/LeyAylen6/earthquakes",
        deployLink: "",
        deploy: false,
        inProgress: false
    },
    {
        title: "Stock Controller",
        image: commingSoon,
        description: `Proyecto de Control de Stock de empresas. Incluye creacion, modificación, eliminación y obtención de movimientos, empresas y productos`,
        tecnologies: [golang, gin, typeScript, react],
        repositoryLink: "https://github.com/LeyAylen6/stock-controller",
        deployLink: "",
        deploy: false,
        inProgress: true
    }, {
        title: "NatureXtreme",
        image: natureXtreme,
        description: `E-Commerce de ropa para actividades al aire Libre.
          Cuenta con un perfil de usuario para ver productos, agregarlos a favoritos y realizar compras y un perfil de administrador para controlar stock de productos, modificar y crear nuevos articulos y ver los usuarios registrados en la página. Además cuenta con un blog con información sobre sitios en los cuales podes realizar este tipo de actividades. En este proyecto grupal utilizamos tecnologías tales como Chacra UI, Typescript, Express, TypeORM, entre otras.`,
        tecnologies: [typeScript, react, node, typeOrm, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/NaturalezaXtreme",
        deployLink: "https://naturaleza-xtreme.vercel.app/",
        deploy: true,
        inProgress: false
    }, {
        title: "Henry Videogames",
        image: henryVideogames,
        description: `Single Page creada utilizando React, Redux, Node Js, Express, Sequelize, PostgreSQL, entre otras herramientas. En este proyecto puedes ver más de 100 juegos en diferentes páginas, buscar juegos por nombre, ver su descripción, filtrarlos por ubicación, ordenarlos en orden Ascendente, Descendente o por su Rating. También puedes crear juegos, actualizarlos, eliminarlos y/o guardarlos en tus favoritos.`,
        tecnologies: [javascript, react, node, express, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/Videogames",
        deployLink: "https://henry-videogames-zeta.vercel.app/",
        deploy: true,
        inProgress: false
    }, {
        title: "Rick And Morty",
        image: rickAndMorty,
        description: `Single Page con temática de Rick and Morty. Permite buscar personajes al azar, por id, agregarlos a favoritos, aplicar filtros, ordenamientos y eliminar personajes buscados. Las Técnologias que se utilizaron para crear esta página fueron React, Redux, Html, Css, Node Js, Express, Sequelize y PostgreSQL.`,
        tecnologies: [javascript, react, node, express, postgreSQL, redux],
        repositoryLink: "https://github.com/LeyAylen6/Rick-Morty",
        deployLink: "https://rick-and-morty-one-tan.vercel.app/",
        deploy: true,
        inProgress: false
    },
]