import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useTranslation } from 'react-i18next';

import styles from "./workExperience.module.css"
import { resources } from '../Skills/constants';
import leafnoiseLogo from '../../assets/logos/leafnoise.png';
import mercadolibreLogo from '../../assets/logos/mercadolibre.png';
import itlgLogo from '../../assets/logos/itlg.png';

const { java, springBoot, postgreSQL, mySql, react, reactQuery, javascript, typescript, go, bigquery } = resources;

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
                                <TimelineDot color="secondary" sx={{ padding: 0, width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', overflow: 'hidden', borderRadius: '50%' }}>
                                    <Box
                                        component="img"
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        sx={{ 
                                            width: '90%', 
                                            height: '90%', 
                                            objectFit: 'contain'
                                        }}
                                    />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '40px', width: "90%" }}>
                                <Typography fontSize="30px" component="span" color="white" fontWeight="bold">
                                    {`${experience.company} - ${experience.charge}`}
                                </Typography>
                                <Box display="flex" alignItems="center" gap={1} mt={0.5} sx={{ justifyContent: experience.justifyContent === 'end' ? 'flex-end' : 'flex-start' }}>
                                    <Typography color="pink">{t(`work_experience.${experience.id}.fromToDate`)}</Typography>
                                    <Typography color="secondary" fontSize="0.9rem" fontStyle="italic">
                                        ({calculateDuration(experience.startDate, experience.endDate)})
                                    </Typography>
                                </Box>
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