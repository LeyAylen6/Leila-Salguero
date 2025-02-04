import styles from './projects.module.css'
import { GitHub } from '@mui/icons-material'
import { projects } from "./constants"
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import commingSoon from './../../assets/proyects/commingSoon.gif'

const Projects = () => {
  const { t } = useTranslation('common');

  return (
    <main id='projects'>

      <h2>{t('projects.title')}</h2>
      <section className={styles.projectsContainer}>
        {projects.map((project) =>
          <article className={styles.project} key={project.title}>
            <h4>{project.title}</h4>
            <div className={styles.proyectType}>
              <div>
                <Alert severity="info" variant='filled' className={styles.type}>{t(`projects.${project.id}.type`)}</Alert>
              </div>

              <div className={styles.projectStatus}>
                {project.inProgress
                  ? <Alert severity='warning' className={styles.warningAlert}>{t(`projects.${project.id}.status`)}</Alert>
                  : <Alert severity='success' className={styles.successAlert}>{t(`projects.${project.id}.status`)}</Alert>
                }
              </div>
            </div>

            {project.videoId
              ? <iframe
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              : <img src={commingSoon} alt={project.title} />
            }

            <p>{t(`projects.${project.id}.description`)}</p>

            <div className={styles.tecnologies}>
              {project.tecnologies.map((tecnology) =>
                <img src={tecnology} width="10%" height="50px" alt={tecnology} key={tecnology} />
              )}
            </div>

            <div className={styles.links}>
              <a href={project.repositoryLink} className={styles.repositoryLink}>
                <GitHub className={styles.githubLoge} />
              </a>

              <button disabled={!project.deployLink} className={styles.deployLink}>
                <a href={project.deployLink} target='blank'>
                  {t(`projects.${project.id}.deploy`)}
                </a>
              </button>
            </div>
          </article>
        )}
      </section>

    </main>
  );
}

export default Projects;