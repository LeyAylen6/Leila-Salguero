import styles from './presentation.module.css';
import smoke from './../../assets/presentation/smoke.mp4'
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation('common');
  const smokeVideoRef = useRef(null);

  const myNameIs = t('presentation.my_name_is', { returnObjects: true })

  useEffect(() => {
    const el = smokeVideoRef.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
    };

    tryPlay();
    el.addEventListener('loadeddata', tryPlay, { once: true });
    el.addEventListener('canplay', tryPlay, { once: true });

    const onFirstGesture = () => tryPlay();
    window.addEventListener('touchstart', onFirstGesture, { passive: true, once: true });
    window.addEventListener('click', onFirstGesture, { once: true });

    return () => {
      el.removeEventListener('loadeddata', tryPlay);
      el.removeEventListener('canplay', tryPlay);
      window.removeEventListener('touchstart', onFirstGesture);
      window.removeEventListener('click', onFirstGesture);
    };
  }, []);

  return (
    <section id='about' className={styles.presentation}>

      <div className={styles.imLeila}>
        <video
          ref={smokeVideoRef}
          src={smoke}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          disablePictureInPicture
        />
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
