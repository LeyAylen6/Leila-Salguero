import styles from './projects.module.css'
import { GitHub } from '@mui/icons-material'
import { projects } from "./constants"
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation('common');

  return (
    <main id='projects'>

      <h2>{t('projects.title')}</h2>
      <section className={styles.projectsContainer}>
        {projects.map((project) =>
          <article className={styles.project} key={project.title}>
            <h4>{project.title}</h4>
            <div className={styles.projectStatus}>
              {project.inProgress
                ? <Alert severity='warning' className={styles.warningAlert}>{t(`projects.${project.id}.status`)}</Alert>
                : <Alert severity='success' className={styles.successAlert}>{t(`projects.${project.id}.status`)}</Alert>
              }
            </div>
            {project.inProgress ? <img src={project.image} alt={project.title} /> : <video src={project.image} controls />}
            <p>{t(`projects.${project.id}.description`)}</p>

            <div className={styles.tecnologies}>
              {project.tecnologies.map((tecnology) => <img src={tecnology} width="10%" height="60px" alt={tecnology} key={tecnology} />)}
            </div>

            <div className={styles.links}>
              <a href={project.repositoryLink} className={styles.repositoryLink}>
                <GitHub className={styles.githubLoge} />
              </a>

              <button disabled={!project.deploy} className={styles.deployLink}>
                <a href={project.deployLink}>
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