import { allContacts } from './constants';
import FormMessage from './Form/Form'

import styles from './contact.module.css'

import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <div id='contact' className={styles.contactContainer}>
      <h2>{t('contact.title')}</h2>
      <hr />

      <section className={styles.contactLinks}>
        {allContacts.map((contact) => (
          <a className={`${styles.link} ${styles[contact.classname]}`} href={contact.link} target='_blank'>
            <img src={contact.image} />
            <span>{contact.content}</span>
          </a>
        ))}
      </section>

      <section className={styles.mapResponsive}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.274711002!2d-58.51587066040409!3d-34.6157959332141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1689032897546!5m2!1ses-419!2sar"
          className={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section >

      <FormMessage />
    </div>
  );
}

export default Contact;