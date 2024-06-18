import styles from './skills.module.css'

import skillsVideo from './../../assets/skills/Skills.mp4'
import { skills } from './constants.js'

import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation('common');

    return (
        <section id='skills' className={styles.skillsSection}>
            <div className={styles.videoContainer}>
                <video src={skillsVideo} autoPlay muted />
            </div>

            <div className={styles.skillsContainer}>
                {skills.map((typeSkill) =>
                    <div key={typeSkill.name} className={styles.typeSkill}>
                        <>
                            <img src={typeSkill.icon} />
                            <span id={styles[typeSkill.name]}>
                                {t(`skills.accordion.${typeSkill.name}`)}
                            </span>
                        </>

                        {typeSkill.skills.map((skill, i) => {
                            return (
                                <div className={styles.skill} key={`${skill}-${i}`} >
                                    <img src={skill.image} />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>

                )}
            </div>
        </section>
    );
}

export default Skills;