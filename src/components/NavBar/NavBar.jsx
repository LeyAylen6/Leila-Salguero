import styles from './navBar.module.css'
import separation from './../../assets/next2.svg'

const NavBar = () => {

    return (
      <div className={styles.navBar}> 

        <div className={styles.link}>
          <a href='#about'>About</a>
        </div>

        <img src={separation} />

        <div className={styles.link}>
          <a href='#skills'>Skills</a>
        </div>

        <img src={separation} />
        
        <div className={styles.link}>
          <a href='#projects'>Proyects</a>
        </div>

        <img src={separation} />

        <div className={styles.link}>
          <a href='#certifications'>Certifications</a>
        </div>

        <img src={separation} />

        <div className={styles.link}>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    );
  }
  
  export default NavBar;