
import styles from './certifications.module.css';

export const certificates = [
    {
        name: 'fullStack',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198389/Portfolio/Certifications/Certificado_Full_Stack_t4glsu.jpg',
    }, {
        name: 'advancedJava',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198389/Portfolio/Certifications/AdvancedJava_vzauzk.jpg'
    }, {
        name: 'python',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198390/Portfolio/Certifications/python_y1pqnw.jpg'
    }, {
        name: 'testing',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198391/Portfolio/Certifications/Testing_o6usso.jpg',
        link: "https://www.credly.com/badges/0e90cb83-98f5-4b82-b1d1-47b878554c9b"
    }, {
        name: 'java',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198389/Portfolio/Certifications/Java_yzodi0.jpg',
    }, {
        name: 'springBoot',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198390/Portfolio/Certifications/SpringBoot_aisjvg.jpg'
    }, {
        name: 'scrum',
        photo: 'https://res.cloudinary.com/dn3tgaige/image/upload/v1739198391/Portfolio/Certifications/Scrum_x2dt7b.jpg',
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
