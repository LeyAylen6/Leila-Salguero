import { useState } from 'react';
import styles from './skills.module.css';
import { skills } from './constants.js';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation('common');
    const [activeTab, setActiveTab] = useState(skills[0].name);

    const activeCategory = skills.find(s => s.name === activeTab);

    return (
        <section id='skills' className={styles.skillsSection}>
            <div className={styles.bgGlow} />

            <h2 className={styles.title}>{t('skills.title')}</h2>

            <div className={styles.tabs}>
                {skills.map((cat) => (
                    <button
                        key={cat.name}
                        className={`${styles.tab} ${activeTab === cat.name ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab(cat.name)}
                    >
                        <img src={cat.icon} alt={cat.name} className={styles.tabIcon} />
                        <span>{t(`skills.accordion.${cat.name}`)}</span>
                        <span className={styles.badge}>{cat.skills.length}</span>
                    </button>
                ))}
            </div>

            <p className={styles.categoryDesc}>
                {t(`skills.description.${activeTab}`)}
            </p>

            <div className={styles.grid}>
                {activeCategory.skills.map((skill, i) => (
                    <div
                        key={skill.name}
                        className={styles.card}
                        style={{ animationDelay: `${i * 0.05}s` }}
                    >
                        <img src={skill.image} alt={skill.name} className={skill.invert ? styles.skillIconInvert : styles.skillIcon} />
                        <span className={styles.skillName}>{skill.name}</span>
                    </div>
                ))}
            </div>

            <div className={styles.waveBottom}>
                <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
                    <path className={styles.waveBack}
                        d="M0,100 C120,160 240,40 360,100 C480,160 600,40 720,100 C840,160 960,40 1080,100 C1200,160 1320,60 1440,100 L1440,180 L0,180 Z" />
                    <path className={styles.waveMid}
                        d="M0,120 C160,60 280,160 440,110 C600,60 720,150 880,110 C1040,70 1160,150 1320,110 C1380,90 1420,120 1440,115 L1440,180 L0,180 Z" />
                    <path className={styles.waveFront}
                        d="M0,140 C100,110 200,160 360,130 C520,100 640,165 800,135 C960,105 1100,160 1260,130 C1360,115 1400,145 1440,135 L1440,180 L0,180 Z" />
                </svg>
            </div>
        </section>
    );
}

export default Skills;
