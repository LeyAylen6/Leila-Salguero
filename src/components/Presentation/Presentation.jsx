import styles from './presentation.module.css';
import smoke from './../../assets/presentation/smoke.mp4'
import profil from './../../assets/presentation/profil.jpeg'
//  autoPlay muted

const Presentation = () => {
  return (
    <seccion id='about' className={styles.presentation}>

      <div className={styles.imLeila}>
        <video src={smoke} autoPlay muted></video>
        <h1>
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <span>&nbsp;</span>
          <span>L</span>
          <span>e</span>
          <span>i</span>
          <span>l</span>
          <span>a</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>a</span>
          <span>l</span>
          <span>g</span>
          <span>u</span>
          <span>e</span>
          <span>r</span>
          <span>o</span>
        </h1>

        <h3>F U L L &nbsp;  S T A C K &nbsp; D E V E L O P E R</h3>

        <p>
          Tengo experiencia en desarrollo Front End, Back End y Testing QA Manual.
          Cuento con conocimientos en metodologías ágiles y herramientas colaborativas tales como Trello o Jira.
          <br />
          🚀 Actualmente estoy ampliando mis habilidades en Java y Spring Boot.
          <br />
          Soy perfeccionista en todo lo que hago, siempre me esfuerzo por ofrecer soluciones y asegurar que cada aspecto esté cuidadosamente revisado.
          <br />
          Si quieres saber más de mi, contactame!
        </p>


        {/* <a href='../../assets/presentation/cv.pdf' download='Leila Salguero - Full Stack Developer'>Descarga mi CV</a> */}

      </div>

      <div className={styles.imgContainer}></div>

    </seccion>
  );
}

export default Presentation;