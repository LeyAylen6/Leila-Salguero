import styles from './skills.module.css'

const Skills = () => {

    const developer = ['HTML','CSS', 'Javascript', 'React', 'Redux', 'Node Js', 'Express', 'PostgreSQL', 'Sequelize', 'Java', 'SpringBoot'];
    const testing = ['Zephyr', 'Selenium', 'Cypress'];
    const tools = ['Jira', 'Trello', 'Excel'];

    return (
      <div id='skills' className={styles.skillsContainer}> 
        {/* <h1>SKILLS</h1> */}
        <div className={styles.skills}>
            <h1>Developer</h1>
            <div className={styles.skill}>
                {developer.map(skill => <p>{skill}</p>)}
            </div>      
        </div>
            
        <div className={styles.skills}>
            <h1>Testing</h1>
            <div className={styles.skill}>
                {testing.map(skill => <p>{skill}</p>)} 
            </div>     
        </div>
        
        <div className={styles.skills}>
            <h1>Herramientas</h1>
            <div className={styles.skill}>
                {tools.map(skill => <p>{skill}</p>)}
            </div>  
        </div>
      </div>
    );
  }
  
  export default Skills;