import styles from './skills.module.css'
import skillsVideo from './../../assets/skills/Skills.mp4'
import skills from './skills.json'

const Skills = () => {

    // const skills = 
    //     // ,'CSS'
    //     // , 'Javascript', 'React', 'Redux', 'Node Js', 'Express', 'PostgreSQL', 'Sequelize', 'TypeScript', 'TypeORM', 'Java', 'SpringBoot', 'Lombok'];

    // const testing = ['Zephyr', 'Selenium', 'Cypress'];
    // const tools = ['Jira', 'Trello', 'Excel'];

    return (
        <section id='skills' className={styles.skillsSection}>

            <div className={styles.videoContainer}>
                <video src={skillsVideo} autoPlay muted></video>
            </div>

            <div className={styles.skillsContainer}> 

            {skills.map(s => {
                return (
                    <div className={styles.typeSkill}>
                    <span>{s.name}</span>
                    
                        {s.skills.map(skill => {
                            return (
                                <div className={styles.skill} >
                                    <img src="./../../assets/skills/css.svg" />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                </div>
                )
            })}
                
                
                {/* <div className={styles.typeSkill}>
                    <span>Developer</span>
                    
                        {developer.map(skill => {
                            return (
                                <div className={styles.skill} >
                                    <img src={skill.image} />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                </div>
                    
                <div className={styles.typeSkill}>
                    <span>Testing</span>
                    <div className={styles.skills}>
                        {testing.map(skill => {
                            return (
                                <div className={styles.skill} >
                                    <img src={skill.image} />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>     
                </div>
                    
                <div className={styles.typeSkill}>
                    <span>Herramientas</span>
                    <div className={styles.skills}>
                        {tools.map(skill => {
                            return (
                                <div className={styles.skill} >
                                    <img src={skill.image} />
                                    <p key={skill.name} >{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>  
                </div>   */}
            </div>
        </section>
    );
  }
  
  export default Skills;