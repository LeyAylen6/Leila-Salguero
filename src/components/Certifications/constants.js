
import styles from './certifications.module.css';

import Java from '../../assets/certifications/Java.jpeg';
import Testing from '../../assets/certifications/Testing.jpeg';
import FullStack from '../../assets/certifications/Fullstack.jpeg'
import SpringBoot from '../../assets/certifications/SpringBoot.jpeg'
import Python from '../../assets/certifications/Python.jpeg'
import Scrum from '../../assets/certifications/Scrum.png'
import AdvancedJava from '../../assets/certifications/AdvancedJava.jpeg'

export const certifications = [
    {
        name: 'fullStack',
        photo: FullStack,
    }, {
        name: 'advancedJava',
        photo: AdvancedJava
    }, {
        name: 'python',
        photo: Python
    }, {
        name: 'testing',
        photo: Testing,
        link: "https://www.credly.com/badges/0e90cb83-98f5-4b82-b1d1-47b878554c9b"
    }, {
        name: 'java',
        photo: Java,
    }, {
        name: 'springBoot',
        photo: SpringBoot
    }, {
        name: 'scrum',
        photo: Scrum,
        link: "https://www.credly.com/earner/earned/badge/4436b233-98bf-4cdf-b2f5-0a7dceb2b2ff"
    },
];

export const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: true,
                arrows: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
            }
        }
    ],
    appendDots: dots => (
        <div>
            <ul className={styles.slickDots}> {dots} </ul>
        </div>
    )
};
