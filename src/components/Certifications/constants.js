
import styles from './certifications.module.css';

import scrum from '../../assets/certifications/scrum.png';
import java from '../../assets/certifications/testing.jpeg';
import testing from '../../assets/certifications/testing.jpeg';
import fullStack from '../../assets/certifications/fullstack.jpeg'
import springBoot from '../../assets/certifications/springboot.jpeg'
import python from '../../assets/certifications/python.jpeg'
import advancedJava from '../../assets/certifications/advanced-java.jpeg'

export const certifications = [
    {
        name: 'fullStack',
        photo: fullStack,
    }, {
        name: 'advancedJava',
        photo: advancedJava
    }, {
        name: 'python',
        photo: python
    }, {
        name: 'testing',
        photo: testing,
        link: "https://www.credly.com/badges/0e90cb83-98f5-4b82-b1d1-47b878554c9b"
    }, {
        name: 'java',
        photo: java,
    }, {
        name: 'springBoot',
        photo: springBoot
    }, {
        name: 'scrum',
        photo: scrum,
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
