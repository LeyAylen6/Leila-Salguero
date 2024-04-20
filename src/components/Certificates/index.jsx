import Carousel from "./carousel";
import styles from "./certificates.module.css"
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation('common');

  return (
    <div id='certifications' className={styles.certificatesContainer}>
      <h2>{t('certificates')}</h2>
      <Carousel />
    </div>
  );
}

export default Certificates;