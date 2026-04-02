import styles from './openToWork.module.css';
import { useTranslation } from 'react-i18next';

const OpenToWork = () => {
  const { t } = useTranslation('common');

  return (
    <a href="#contact" className={styles.badge}>
      <span className={styles.pulse} />
      <span className={styles.text}>{t('open_to_work')}</span>
    </a>
  );
};

export default OpenToWork;
