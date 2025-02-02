import styles from './skills.module.css'

// import skillsVideo from './../../assets/skills/Skills.mp4'
import { skills } from './constants.js'
import WavesAnimation from '../WavesAnimation/index.jsx'

import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation('common');

    return (
        <section id='skills' className={styles.skillsSection}>
            <>
                <h1>Skills</h1>

                {/* <></>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                    <path d="M0,10 Q50,0 100,10 T200,10" stroke="#ffcc00" stroke-width="10" fill="none" />
                </svg> */}
            </>

            {/* <div className={styles.videoContainer}>
                <video src={skillsVideo} autoPlay muted />
            </div> */}

            <div className={styles.skillsContainer}>
                {skills.map((typeSkill) =>
                    <div key={typeSkill.name} className={styles.typeSkill}>
                        <>
                            <img src={typeSkill.icon} alt={typeSkill.name} />
                            <span id={styles[typeSkill.name]}>
                                {t(`skills.accordion.${typeSkill.name}`)}
                            </span>
                        </>

                        {typeSkill.skills.map((skill, i) => {
                            return (
                                <div className={styles.skill} key={`${skill}-${i}`} >
                                    <img src={skill.image} alt={skill} />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>

                )}
            </div>

            <WavesAnimation waveBackground={styles.waveBackground} bottomPositionWave={styles.bottomPositionWave} />
        </section>
    );
}

export default Skills;