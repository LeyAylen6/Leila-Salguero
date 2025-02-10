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

import { useTranslation } from 'react-i18next';

import styles from "./workExperience.module.css"
import { resources } from '../Skills/constants';

const { java, springBoot, postgreSQL, mySql, react, reactQuery, javascript, typescript } = resources;

const experiences = [
    {
        id: "leafnoise_back",
        company: "Leafnoise",
        charge: "Backend Developer SSR",
        tecnologies: [java, springBoot],
        justifyContent: "start"
    },
    {
        id: "itlg_back",
        company: "ITLG",
        charge: "Backend Developer",
        tecnologies: [java, springBoot, postgreSQL, mySql],
        justifyContent: "end"
    },
    {
        id: "itlg_front",
        company: "ITLG",
        charge: "Frontend Developer",
        tecnologies: [react, reactQuery, javascript, typescript],
        justifyContent: "start"
    }

]

const WorkExperience = () => {
    const { t } = useTranslation('common');

    return (
        <Box id="experience">
            <h2>Experiencia Laboral</h2>
            <Timeline position="alternate" className={styles.experienceContainer}>
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
                                            <img src={tecnology} height="40rem" alt='Technology Logo' />
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