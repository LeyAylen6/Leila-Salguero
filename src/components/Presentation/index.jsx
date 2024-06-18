import styles from './presentation.module.css';
import smoke from './../../assets/presentation/smoke.mp4'
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation('common');

  const myNameIs = t('presentation.mi_name_is', { returnObjects: true })

  return (
    <section id='about' className={styles.presentation}>

      <div className={styles.imLeila}>
        <video src={smoke} autoPlay muted></video>
        <h1>
          {myNameIs.map((letter) => (
            <span>{letter}</span>
          ))}
        </h1>

        <h3>F U L L &nbsp;  S T A C K &nbsp; D E V E L O P E R</h3>

        <p>{t('presentation.description')}</p>

        {/* <a href='../../assets/presentation/cv.pdf' download='Leila Salguero - Full Stack Developer'>Descarga mi CV</a> */}

      </div>
      <div className={styles.imgContainer} />
    </section>
  );
}

export default Presentation;