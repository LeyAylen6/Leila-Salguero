import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import java from './../../assets/skills/java.svg'
import react from './../../assets/skills/react.svg'
import springboot from './../../assets/skills/spring.svg'
import reactQuery from './../../assets/skills/React Query.png'
import postgresql from './../../assets/skills/postgresql.svg'
import typescript from './../../assets/skills/typescript.svg'
import javascript from './../../assets/skills/javascript.svg'
import mySql from './../../assets/skills/mySql.svg'

import { useTranslation } from 'react-i18next';

import styles from "./workExperience.module.css"

const experiences = [
    {
        id: "itlg_back",
        company: "ITLG",
        charge: "Backend Developer",
        tecnologies: [java, springboot, postgresql, mySql],
        justifyContent: "start"
    },
    {
        id: "itlg_front",
        company: "ITLG",
        charge: "Frontend Developer",
        tecnologies: [react, reactQuery, javascript, typescript],
        justifyContent: "end"
    }

]

const WorkExperience = () => {
    const { t } = useTranslation('common');

    return (
        <div id="experience" className={styles.experiencesContainer}>
            <h2>Experiencia Laboral</h2>
            <Timeline position="alternate" className={styles.experiences}>
                {
                    experiences.map((experience, i) => (
                        <TimelineItem key={`${experience}-${i}`}>
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
                                <Typography color="pink">{t(`work_experience.${experience.id}.fromToDate`)}</Typography>
                                <Box color="white">
                                    <List>
                                        {t(`work_experience.${experience.id}.resume`, { returnObjects: true }).map((resume, i) => <ListItem key={i}>{resume}</ListItem >)}
                                    </List>
                                </Box>
                                <Box display="flex" className={styles.tecnologies}>
                                    {experience.tecnologies.map((tecnology) =>
                                        <Box p={2} key={tecnology}>
                                            <img src={tecnology} height="40rem" alt={tecnology} />
                                        </Box>
                                    )}
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
};

export default WorkExperience;