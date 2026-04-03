import styles from './projects.module.css';
import { GitHub } from '@mui/icons-material';
import { projects } from './constants';
import { useTranslation } from 'react-i18next';
import commingSoon from './../../assets/proyects/commingSoon.gif';

const Projects = () => {
  const { t } = useTranslation('common');

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <header className={styles.header}>
        <h2 className={styles.title}>{t('projects.title')}</h2>
      </header>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article className={styles.card} key={project.title}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.badges}>
                <span className={styles.badgeType}>{t(`projects.${project.id}.type`)}</span>
                <span
                  className={
                    project.inProgress ? styles.badgeStatusWarn : styles.badgeStatusOk
                  }
                >
                  {t(`projects.${project.id}.status`)}
                </span>
              </div>
            </div>

            <div className={styles.mediaWrap}>
              {project.videoId ? (
                <iframe
                  className={styles.iframe}
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <img
                  className={styles.placeholderImg}
                  src={commingSoon}
                  alt=""
                />
              )}
            </div>

            <p className={styles.description}>{t(`projects.${project.id}.description`)}</p>

            <div className={styles.techRow}>
              {project.tecnologies.map((tecnology) => (
                <img
                  src={tecnology}
                  alt=""
                  className={styles.techIcon}
                  key={tecnology}
                />
              ))}
            </div>

            <div className={styles.links}>
              <a
                href={project.repositoryLink}
                className={styles.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub className={styles.githubIcon} />
              </a>
              {project.deployLink ? (
                <a
                  href={project.deployLink}
                  className={styles.deployBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`projects.${project.id}.deploy`)}
                </a>
              ) : (
                <span className={styles.deployBtnDisabled}>
                  {t(`projects.${project.id}.deploy`)}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
