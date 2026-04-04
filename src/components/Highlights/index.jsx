import styles from './highlights.module.css';
import { useTranslation } from 'react-i18next';

const Highlights = () => {
  const { t } = useTranslation('common');
  const items = t('highlights.items', { returnObjects: true });

  return (
    <section className={styles.highlights}>
      <div className={styles.bgGlow} aria-hidden />
      <hr className={styles.divider} />
      <h2>{t('highlights.title')}</h2>
      <p className={styles.subtitle}>{t('highlights.subtitle')}</p>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div className={styles.card} key={i} style={{ animationDelay: `${0.15 * i}s` }}>
            <span className={styles.icon}>{item.icon}</span>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.waveBottom}>
        <svg viewBox="0 0 2880 180" preserveAspectRatio="none">
          <path className={styles.waveBack}
            d="M0,100 C120,160 240,40 360,100 C480,160 600,40 720,100 C840,160 960,40 1080,100 C1200,160 1320,60 1440,100 C1560,160 1680,40 1800,100 C1920,160 2040,40 2160,100 C2280,160 2400,60 2520,100 C2640,160 2760,40 2880,100 L2880,180 L0,180 Z" />
          <path className={styles.waveMid}
            d="M0,120 C160,60 280,160 440,110 C600,60 720,150 880,110 C1040,70 1160,150 1320,110 C1380,90 1420,120 1440,115 C1600,60 1720,160 1880,110 C2040,60 2160,150 2320,110 C2480,70 2600,150 2760,110 C2820,90 2860,120 2880,115 L2880,180 L0,180 Z" />
          <path className={styles.waveFront}
            d="M0,140 C100,110 200,160 360,130 C520,100 640,165 800,135 C960,105 1100,160 1260,130 C1360,115 1400,145 1440,135 C1540,110 1640,160 1800,130 C1960,100 2080,165 2240,135 C2400,105 2540,160 2700,130 C2800,115 2840,145 2880,135 L2880,180 L0,180 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Highlights;
