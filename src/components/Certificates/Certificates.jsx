import Carousel from "./Carousel";
import styles from "./certificates.module.css"

const Certificates = () => {
    return (
      <div id='certifications' className={styles.certificatesContainer}> 
        <h2>Mis Certificados</h2>
        <Carousel />
      </div>
    );
  }
  
export default Certificates;