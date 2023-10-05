import styles from "./certificates.module.css";
import NukaCarousel from "nuka-carousel";
import Java from './../../assets/certificates/Java.jpeg';
import Scrum from './../../assets/certificates/Scrum.png';
import Testing from './../../assets/certificates/Testing.jpeg';
import FullStack from './../../assets/certificates/Certificado Full Stack.jpeg'
import SpringBoot from './../../assets/certificates/SpringBoot.jpeg'
import { Prev } from "./Prev";
import { Next } from "./Next";
import { useEffect, useState } from "react";

const Carousel = () => {

  const [screenView, setScreenView] = useState('big');

  useEffect(() => {
    if (window.innerWidth > 900) {
      setScreenView('big')
    } else if (window.innerWidth <= 900 && window.innerWidth >= 600) {
      setScreenView('medium')
    } else {
      setScreenView('little')
    }
  }, []);

  const certificates = [
    {
      name: 'fullStack',
      photo: FullStack,
      link: "https://certificates.soyhenry.com/new-cert?id=2ac5877aa93d404ed892c30ad96c8c9cbc5f6ca1df078f09d8fa8632280495db"
    },
    {
      name: 'testing',
      photo: Testing,
      link: "https://www.credly.com/badges/0e90cb83-98f5-4b82-b1d1-47b878554c9b"
    },
    {
      name: 'java',
      photo: Java,
    },
    {
      name: 'springBoot',
      photo: SpringBoot
    },
    {
      name: 'scrum',
      photo: Scrum,
      link: "https://www.credly.com/earner/earned/badge/4436b233-98bf-4cdf-b2f5-0a7dceb2b2ff"
    },
  ];

  const params = {
    autoplay: true,
    wrapAround: true,
    enableKeyboardControls: true,
    slidesToShow: screenView == "medium" ? 2 : 1,
    adaptiveHeight: true,
    defaultControlsConfig: {
      nextButtonStyle: {
        backgroundColor: "transparent",
      },
      prevButtonStyle: {
        backgroundColor: "transparent"
      },
      pagingDotsStyle: {
        transform: screenView == "little" || screenView == "medium" ? "scale(2)" : "scale(3)",
        backgroundColor: "transparent",
        margin: screenView == "little" ? "2px" : "8px",
        marginBottom: screenView == "little" ? "0px" : "20px",
        fill: "rgb(255,0,255)"
      },
      prevButtonText: screenView == "little" || screenView == "medium" ? " " : <Prev />,
      nextButtonText: screenView == "little" || screenView == "medium" ? " " : <Next />,
    }
  }

  return (
    <div style={{ marginBottom: "500px" }}>
      <NukaCarousel {...params}>
        {certificates.map((certificate, index) => {
          return (
            <a href={certificate.link} key={index} className={`${styles[certificate.name]}`}>
              <img
                src={certificate.photo}
                alt={`${certificate.name} Certificate`}
                className={styles.images}
              />
            </a>
          )
        })}
      </NukaCarousel>
    </div>
  );
};

export default Carousel;