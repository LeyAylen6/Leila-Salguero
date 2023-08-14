import styles from './navBar.module.css'
import separation from './../../assets/navbarSeparation.svg'

const NavBar = () => {

    return (
      <div className={styles.navBar}> 

        <a href='#about' className={styles.link}>
          About
        </a>

        <img src={separation} />

        <a href='#skills' className={styles.link}>
          Skills
        </a>

        <img src={separation} />
        
        <a href='#projects' className={styles.link}>
            Proyects
        </a>

        <img src={separation} />

        <a href='#certifications' className={styles.link}>
          Certifications
        </a>

        <img src={separation} />

        <a href='#contact' className={styles.link}>
          Contact
        </a>
        
      </div>
    );
  }
  
  export default NavBar;