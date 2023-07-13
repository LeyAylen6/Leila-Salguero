import styles from './skills.module.css'
import skills from './../../assets/Skills.mp4'

const Skills = () => {

    const developer = ['HTML','CSS', 'Javascript', 'React', 'Redux', 'Node Js', 'Express', 'PostgreSQL', 'Sequelize', 'TypeScript', 'TypeORM', 'Java', 'SpringBoot', 'Lombok'];
    const testing = ['Zephyr', 'Selenium', 'Cypress'];
    const tools = ['Jira', 'Trello', 'Excel'];

    return (
        <section id='skills' className={styles.skillsSection}>

            <video src={skills} autoPlay muted></video>

            <div className={styles.skillsContainer}> 
                
                <div className={styles.skills}>
                    <span>Developer</span>
                    <div className={styles.skill}>
                        {developer.map(skill => <p key={skill} >{skill}</p>)}
                    </div>      
                </div>
                    
                <div className={styles.skills}>
                    <span>Testing</span>
                    <div className={styles.skill}>
                        {testing.map(skill => <p key={skill}>{skill}</p>)} 
                    </div>     
                </div>
                
                <div className={styles.skills}>
                    <span>Herramientas</span>
                    <div className={styles.skill}>
                        {tools.map(skill => <p key={skill}>{skill}</p>)}
                    </div>  
                </div>
            </div>
      </section>
    );
  }
  
  export default Skills;