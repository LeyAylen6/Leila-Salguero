import styles from './projects.module.css'
import rickAndMorty from './../../assets/rickAndMorty.mp4'
import henryVideogames from './../../assets/henryVideogames.mp4'

const Proyects = () => {
    return (
      <div id='projects' className={styles.projectsContainer}> 
        <h1>My Proyects</h1>
        
        <div className={styles.project}>
          <h2>Henry Videogames</h2> 
          <video src={henryVideogames} />

          <p>
            Henry Videogames is a single page application built with React, Redux, Html, Css for frontend, Node Js, Express for backend and Sequelize and PostgreSQL to build the rest API.
            In this project you can see more than 100 games on different pages, search for games by name, see their description, filter games by location, sort them in Ascending, Descending or Rating order. You can also create, update and delete games created by you.
          </p>

          <a href='https://henry-videogames.up.railway.app/'>Ver el proyecto</a>

        </div>

        <div className={styles.project}>
          <h2>Rick And Morty</h2> 
          <video src={rickAndMorty} />
      
          <p>This project is a rick and morty themed page, you can search characters random, by id, add them to favorites and apply filters and sorts and remove searched characters.
          It was created with React, Redux, Html, Css, Node Js, Express, Sequelize and PostgreSQL.
          </p>
          
          <a href='rick-and-morty-app.up.railway.app'>Ver el proyecto</a>

        </div>

      </div>
    );
  }
  
export default Proyects;