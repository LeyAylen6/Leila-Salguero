import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import java from './../../assets/skills/java.svg'
import react from './../../assets/skills/react.svg'
import springboot from './../../assets/skills/spring.svg'
import reactQuery from './../../assets/skills/React Query.png'
import postgresql from './../../assets/skills/postgresql.svg'
import typescript from './../../assets/skills/typescript.svg'
import javascript from './../../assets/skills/javascript.svg'
import mySql from './../../assets/skills/mySql.svg'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from "./workExperience.module.css"

const experiences = [
    {
        company: "ITLG",
        charge: "Backend Developer",
        fromToDate: "Ene. 2024 - Actualidad",
        resume: [
            "● Creación y mantenimiento de APIs utilizando Java y SpringBoot",
            "● Migración de Base de datos PostgreSQL a MySQL"
        ],
        tecnologies: [java, springboot, postgresql, mySql],
        justifyContent: "start"
    },
    {
        company: "ITLG",
        charge: "Frontend Developer",
        fromToDate: "Ago. 2023 - Ene. 2024",
        resume: [
            "Desarrollo de interfaces web atractivas y funcionales ●",
            "Implementación de metodologías ágiles ●",
            "Conexión entre frontend y APIs utilizando React-Query ●",
            "Soporte para la resolución de Bugs productivos ●"
        ],
        tecnologies: [react, reactQuery, javascript, typescript],
        justifyContent: "end"
    }

]

const WorkExperience = () => {
    return (
        <Box id="experience">
            <h2>Experiencia Laboral</h2>
            <Timeline position="alternate" className={styles.experienceContainer}>
                {
                    experiences.map((experience, i) => (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '40px', width: "90%" }}>
                                <Typography fontSize="30px" component="span" color="white" fontWeight="bold">
                                    {`${experience.company} - ${experience.charge}`}
                                </Typography>
                                <Typography color="pink">{experience.fromToDate}</Typography>
                                <Box color="white">
                                    <List>
                                        {experience.resume.map((resume, i) => <ListItem key={i}>{resume}</ListItem >)}
                                    </List>
                                </Box>
                                <Box display="flex" className={styles.tecnologies}>
                                    {experience.tecnologies.map((tecnology) =>
                                        <Box p={2}>
                                            <img src={tecnology} height="40rem" />
                                        </Box>
                                    )}
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </Box>
    );
};

export default WorkExperience;