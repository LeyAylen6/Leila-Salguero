import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import styles from "./workExperience.module.css";
import { resources } from '../Skills/constants';
import leafnoiseLogo from '../../assets/logos/leafnoise.png';
import mercadolibreLogo from '../../assets/logos/mercadolibre.png';
import itlgLogo from '../../assets/logos/itlg.png';

const { java, springBoot, postgreSQL, mySql, react, reactQuery, typescript, go, bigquery } = resources;

/** Mismo umbral que MUI `theme.breakpoints.down('md')` (~900px) */
const MQ_NARROW = '(max-width: 899.98px)';

const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} año${years > 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
    } else if (years > 0) {
        return `${years} año${years > 1 ? 's' : ''}`;
    } else {
        return `${months} mes${months > 1 ? 'es' : ''}`;
    }
};

const experiences = [
    {
        id: "mercadolibre_back",
        company: "Mercado Libre",
        logo: mercadolibreLogo,
        charge: "Software Engineer",
        startDate: "2025-07-01",
        endDate: "2026-04-02",
        tecnologies: [go, bigquery],
        justifyContent: "start"
    },
    {
        id: "leafnoise_back",
        company: "Leafnoise",
        logo: leafnoiseLogo,
        charge: "Backend Developer SSR",
        startDate: "2025-02-01",
        endDate: "2025-07-01",
        tecnologies: [java, springBoot],
        justifyContent: "end"
    },
    {
        id: "itlg_fullstack",
        company: "ITLG",
        logo: itlgLogo,
        charge: "Full Stack Developer",
        startDate: "2023-07-01",
        endDate: "2024-06-30",
        tecnologies: [java, springBoot, postgreSQL, mySql, react, reactQuery, typescript],
        justifyContent: "start"
    }
];

const WorkExperience = () => {
    const { t } = useTranslation('common');
    const isNarrow = useMediaQuery(MQ_NARROW);

    const experienceBody = (experience) => (
        <>
            <span className={styles.bubbleTitle}>
                {`${experience.company} - ${experience.charge}`}
            </span>
            <div
                className={[
                    styles.bubbleDatesRow,
                    isNarrow || experience.justifyContent !== 'end'
                        ? styles.bubbleDatesRowStart
                        : styles.bubbleDatesRowEnd,
                ].join(' ')}
            >
                <span className={styles.bubbleDatePrimary}>
                    {t(`work_experience.${experience.id}.fromToDate`)}
                </span>
                <span className={styles.bubbleDateDuration}>
                    ({calculateDuration(experience.startDate, experience.endDate)})
                </span>
            </div>
            <ul className={styles.experienceList}>
                {t(`work_experience.${experience.id}.resume`, { returnObjects: true }).map((resume, i) => (
                    <li key={i} className={styles.experienceListItem}>
                        {resume}
                    </li>
                ))}
            </ul>
            <div className={styles.techRow}>
                {experience.tecnologies.map((tecnology) => (
                    <div className={styles.techIconPad} key={tecnology}>
                        <img
                            src={tecnology}
                            alt=""
                            className={styles.techIconImg}
                        />
                    </div>
                ))}
            </div>
        </>
    );

    const renderBubble = (experience, tailRight) => (
        <div className={styles.bubbleWrap}>
            <div
                className={[
                    styles.speechBubble,
                    tailRight ? styles.speechBubbleTailRight : styles.speechBubbleTailLeft,
                ].join(' ')}
            >
                {experienceBody(experience)}
            </div>
        </div>
    );

    const renderLogoDot = (experience) => (
        <div className={styles.logoDot}>
            <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className={styles.logoImg}
            />
        </div>
    );

    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={isNarrow ? styles.mobileSectionTitle : undefined}>Experiencia Laboral</h2>
            <div
                className={[styles.timelineRoot, isNarrow ? styles.narrowTimeline : ''].filter(Boolean).join(' ')}
                role="list"
            >
                <div className={styles.timelineSpine} aria-hidden />
                {experiences.map((experience, i) => {
                    const bubbleOnLeft = !isNarrow && i % 2 === 1;
                    const bubbleOnRight = !isNarrow && i % 2 === 0;

                    return (
                        <div
                            key={`${experience.id}-${i}`}
                            className={isNarrow ? styles.timelineRowNarrow : styles.timelineRowWide}
                            role="listitem"
                        >
                            {isNarrow ? (
                                <>
                                    <div className={styles.axisCell}>{renderLogoDot(experience)}</div>
                                    <div className={styles.bubbleCell}>
                                        {renderBubble(experience, false)}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`${styles.sideCell} ${styles.sideCellAlignEnd}`}>
                                        {bubbleOnLeft ? renderBubble(experience, true) : null}
                                    </div>
                                    <div className={styles.axisCell}>{renderLogoDot(experience)}</div>
                                    <div className={`${styles.sideCell} ${styles.sideCellAlignStart}`}>
                                        {bubbleOnRight ? renderBubble(experience, false) : null}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorkExperience;
