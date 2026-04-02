import styles from './presentation.module.css';
import smoke from './../../assets/presentation/smoke.mp4'
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation('common');

  const myNameIs = t('presentation.my_name_is', { returnObjects: true })

  return (
    <section id='about' className={styles.presentation}>

      <div className={styles.imLeila}>
        <video src={smoke} autoPlay muted loop></video>
        <h1 key={myNameIs}>
          {myNameIs.split("").map((letter, i) =>
            i !== 4 && i !== 10
              ? <span key={i}>{letter}</span>
              : <span key={i}>&nbsp;{letter}</span>
          )}
        </h1>

        <h3>F U L L &nbsp;  S T A C K &nbsp; D E V E L O P E R</h3>

        <p>{t('presentation.description')}</p>

        <ul className={styles.quickStats}>
          <li className={styles.statCard}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>{t('presentation.stats_projects')}</span>
          </li>
          <li className={styles.statCard}>
            <span className={styles.statValue}>3+</span>
            <span className={styles.statLabel}>{t('presentation.stats_technologies')}</span>
          </li>
          <li className={styles.statCard}>
            <span className={styles.statValue}>2</span>
            <span className={styles.statLabel}>{t('presentation.stats_roles')}</span>
          </li>
        </ul>
      </div>

      <div className={styles.rightCol}>
        <div className={styles.imgContainer}>
          <div className={styles.img} />
          <img src='' alt=''></img>
        </div>

        <div className={styles.actionsCol}>
          <a href="#projects" className={styles.primaryCta}>
            {t('presentation.cta_primary')}
          </a>
          <a href="#contact" className={styles.secondaryCta}>
            {t('presentation.cta_secondary')}
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1wt7EM6rJyoLNWmKU2LYggp4-KqfKOxP6"
            download
            className={styles.downloadLink}
          >
            {t('presentation.download_cv')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
