import styles from './projects.module.css'
import rickAndMorty from './../../assets/proyects/rickAndMorty.mp4'
import henryVideogames from './../../assets/proyects/henryVideogames.mp4'
import natureXtreme from './../../assets/proyects/NatureXtreme.mp4'

const Proyects = () => {
    return (
      <div id='projects' className={styles.projectsContainer}> 
       
        <h2>Mis Proyectos</h2>

        <div className={styles.project}>
          <h4>NatureXtreme</h4> 
          <video src={natureXtreme} controls/>

          <p>
          E-Commerce de ropa para actividades al aire Libre. 
          Cuenta con un perfil de usuario para ver productos, agregarlos a favoritos y realizar compras y un perfil de administrador para controlar stock de productos, modificar y crear nuevos articulos y ver los usuarios registrados en la página.
          Además cuenta con un blog con información sobre sitios en los cuales podes realizar este tipo de actividades.
          En este proyecto grupal utilizamos tecnologías tales como Chacra UI, Typescript, Express, TypeORM, entre otras.
          </p>

          <a href='https://naturaleza-xtreme.vercel.app/'>Ver el proyecto</a>

        </div>

        <div className={styles.project}>
          <h4>Henry Videogames</h4> 
          <video src={henryVideogames} controls/>

          <p>
          Single Page creada utilizando React, Redux, Node Js, Express, Sequelize, PostgreSQL, entre otras herramientas.
          En este proyecto puedes ver más de 100 juegos en diferentes páginas, buscar juegos por nombre, ver su descripción, filtrarlos por ubicación, ordenarlos en orden Ascendente, Descendente o por su Rating. También puedes crear juegos, actualizarlos, eliminarlos y/o guardarlos en tus favoritos.
          </p>

          <a href='https://henry-videogames-zeta.vercel.app/'>Ver el proyecto</a>

        </div>

        <div className={styles.project}>
          <h4>Rick And Morty</h4> 
          <video src={rickAndMorty} controls/>
      
          <p>Single Page con temática de Rick and Morty. Permite buscar personajes al azar, por id, agregarlos a favoritos, aplicar filtros, ordenamientos y eliminar personajes buscados.
          Las Técnologias que se utilizaron para crear esta página fueron React, Redux, Html, Css, Node Js, Express, Sequelize y PostgreSQL.
          </p>
          
          <a href='https://rick-and-morty-one-tan.vercel.app/'>Ver el proyecto</a>

        </div>

      </div>
    );
  }
  
export default Proyects;