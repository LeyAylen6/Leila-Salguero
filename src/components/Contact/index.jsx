import styles from './contact.module.css'
import FormMessage from './Form/Form'
import Github from './../../assets/contact/Github.png'
import { IconLinkedIn, IconSmartphone } from '../icons'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <section id='contact' className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.bgGlow} aria-hidden />
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="contact-heading" className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.lede}>{t('contact.lede')}</p>
        </header>

        <ul className={styles.channels}>
          <li>
          <a
            className={`${styles.channel} ${styles.channelGithub}`}
            href="https://github.com/LeyAylen6"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.channelIconWrap}>
              <img src={Github} alt="" width={28} height={28} />
            </span>
            <span className={styles.channelLabel}>GitHub</span>
            <span className={styles.channelHandle}>LeyAylen6</span>
          </a>
          </li>

          <li>
          <a
            className={`${styles.channel} ${styles.channelLinkedIn}`}
            href="https://www.linkedin.com/in/leilaaylensalguero/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.channelIconWrap}>
              <IconLinkedIn className={styles.linkedinIcon} size={28} aria-hidden />
            </span>
            <span className={styles.channelLabel}>LinkedIn</span>
            <span className={styles.channelHandle}>leilaaylensalguero</span>
          </a>
          </li>

          <li>
          <a
            className={`${styles.channel} ${styles.channelPhone}`}
            href="tel:+541158079279"
            aria-label={`${t('contact.phone_label')}: (+54) 11-5807-9279`}
          >
            <span className={styles.channelIconWrap}>
              <IconSmartphone className={styles.phoneIcon} aria-hidden />
            </span>
            <span className={styles.channelLabel}>{t('contact.phone_label')}</span>
            <span className={styles.channelHandle}>(+54) 11-5807-9279</span>
          </a>
          </li>
        </ul>

        <div className={styles.lower}>
          <div className={styles.mapCard}>
            <h3 className={styles.mapTitle}>{t('contact.map_title')}</h3>
            <div className={styles.mapFrame}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.274711002!2d-58.51587066040409!3d-34.6157959332141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1689032897546!5m2!1ses-419!2sar"
                className={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                allowFullScreen
              />
            </div>
          </div>

          <div className={styles.formPanel}>
            <FormMessage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
