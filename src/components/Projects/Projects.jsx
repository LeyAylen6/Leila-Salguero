import styles from './projects.module.css'
import { GitHub } from '@mui/icons-material'
import { projects } from "./constants"
import { Alert, Icon, SvgIcon } from '@mui/material';

const Projects = () => {
  return (
    <main id='projects'>

      <h2>Mis Proyectos</h2>
      <section className={styles.projectsContainer}>
        {
          projects.map((project) =>
            <article className={styles.project} key={project.title}>
              <h4>{project.title}</h4>
              <div className={styles.projectStatus}>
                {project.inProgress
                  ? <Alert severity='warning' className={styles.warningAlert}>En Desarrollo</Alert>
                  : <Alert severity='success' className={styles.successAlert}>Finalizado</Alert>
                }
              </div>
              {project.inProgress ? <img src={project.image} /> : <video src={project.image} controls />}
              <p>{project.description}</p>

              <div className={styles.tecnologies}>
                {project.tecnologies.map((tecnology) => <img src={tecnology} width="10%" height="60px" />)}
              </div>

              <div className={styles.links}>
                <a href={project.repositoryLink} className={styles.repositoryLink}><GitHub className={styles.githubLoge} /></a>
                <button disabled={project.inProgress} className={styles.deployLink}>
                  <a href={project.deployLink}>Ver el Proyecto</a>
                </button>
              </div>
            </article>
          )
        }
      </section>

    </main>
  );
}

export default Projects;