import styles from './contact.module.css'
import { Link } from 'react-router-dom';
import FormMessage from './Form/Form'
import Github from './../../assets/Github.png'
import LinkedIn from './../../assets/LinkedIn.png'
import Phone from './../../assets/Phone.svg'
// import email from './..'

const Contact = () => {
    return (
      <div id='contact' className={styles.contactContainer}> 
        <h2>Contactame</h2>
        
        <hr />

        <div className={styles.contactLinks}>
          <Link className={`${styles.link} ${styles.linkLinkedIn}`} to="https://www.linkedin.com/in/leilaaylensalguero/">
            <img src={LinkedIn}/>
            <span>leilaaylensalguero</span>
          </Link>

          <Link className={`${styles.link} ${styles.linkGithub}`} to="https://github.com/LeyAylen6">
            <img src={Github}/>
            <span>LeyAylen6</span>
          </Link>

          <Link className={`${styles.link} ${styles.linkGithub}`} to="https://github.com/LeyAylen6">
            <img src={Github}/>
            <span>LeyAylen6</span>
          </Link> 

          <div className={`${styles.link} ${styles.linkPhone}`}>
            <img src={Phone}/>
            <span>(+54) 11-5807-9279</span>
          </div>

        </div>

        <div className={styles.mapResponsive}>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.274711002!2d-58.51587066040409!3d-34.6157959332141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1689032897546!5m2!1ses-419!2sar"  
            className={styles.map}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>

        </div >

        <FormMessage />
        
      </div>
    );
  }
  
export default Contact;