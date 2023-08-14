import styles from './skills.module.css'
import skillsVideo from './../../assets/skills/Skills.mp4'
import skills from './skills.json'

const Skills = () => {

    return (
        <section id='skills' className={styles.skillsSection}>

            <div className={styles.videoContainer}>
                <video src={skillsVideo} autoPlay muted></video>
            </div>

            <div className={styles.skillsContainer}> 

                {skills.map(typeSkill => {
                    return (
                        <div className={styles.typeSkill}>
                        <span id={styles[typeSkill.name]}>{typeSkill.name}</span>
                        
                            {typeSkill.skills.map(skill => {
                                return (
                                    <div className={styles.skill} >
                                        <img src={skill.image} />
                                        <p key={skill.name} >{skill.name}</p>
                                    </div>
                                )
                            })}
                    </div>
                    )
                })}
                
            </div>
        </section>
    );
  }
  
  export default Skills;