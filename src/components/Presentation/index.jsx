import styles from './presentation.module.css';
import smoke from './../../assets/presentation/smoke.mp4'
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation('common');

  const myNameIs = t('presentation.my_name_is', { returnObjects: true })

  return (
    <section id='about' className={styles.presentation}>

      <div className={styles.imLeila}>
        <video src={smoke} autoPlay muted></video>
        <h1>
          {myNameIs.split("").map((letter, i) =>
            i !== 4 && i !== 10
              ? <span>{letter}</span>
              : <><span>&nbsp;</span> <span>{letter}</span></>
          )}
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