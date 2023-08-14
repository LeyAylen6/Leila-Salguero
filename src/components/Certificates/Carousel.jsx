import styles from "./certificates.module.css";
import NukaCarousel from "nuka-carousel";
import Java from './../../assets/certificates/Java.jpeg';
import Scrum from './../../assets/certificates/Scrum.png';
import Testing from './../../assets/certificates/Testing.jpeg';
import FullStack from './../../assets/certificates/Certificado Full Stack.jpeg'
import { Prev } from "./Prev";
import { Next } from "./Next";
import { useEffect, useState } from "react";


const Carousel = () => {

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      window.innerWidth <= '600px' ? setIsMobile(true) : setIsMobile(false);
    }, []);

    const certificates = [
      {
        name: 'fullStack',
        photo: FullStack,
        link: "https://certificates.soyhenry.com/new-cert?id=2ac5877aa93d404ed892c30ad96c8c9cbc5f6ca1df078f09d8fa8632280495db"
      }, {
        name: 'testing',
        photo: Testing,
        link: "https://www.credly.com/badges/0e90cb83-98f5-4b82-b1d1-47b878554c9b"
      }, { 
        name: 'java',
        photo: Java,
        link: "https://community.open-bootcamp.com/user/leilasalguero/certificaciones/1da99569-0e76-403a-a6dc-3072efcafa45"
      }, {
        name: 'scrum',
        photo: Scrum,
        link: "https://www.credly.com/earner/earned/badge/4436b233-98bf-4cdf-b2f5-0a7dceb2b2ff"
      }, 
    ];

    const params = {
      autoplay: true,
      wrapAround: true,
      enableKeyboardControls: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      defaultControlsConfig: {
        nextButtonStyle: {
          backgroundColor: "transparent",
        }, 
        prevButtonStyle: {
          backgroundColor: "transparent"
        }, 
        pagingDotsStyle: {
          transform: isMobile ? "scale(2)" : "scale(3)",
          backgroundColor: "transparent",
          margin: isMobile ? "2px" : "8px",
          marginBottom: isMobile ? "0px" : "20px",
          fill: "rgb(255,0,255)"
        },
        prevButtonText: isMobile ? " " : <Prev />,
        nextButtonText: isMobile ? " " : <Next />,
      }
    }

  return (
    <div style={{ marginBottom:"500px"}}>
      <NukaCarousel {...params}>
          {certificates.map((certificate, index)=> {
              return (
                  <a href={certificate.link} key={index} className={`${styles[certificate.name]}`}>
                      <img 
                        src={certificate.photo} 
                        alt={`${certificate.name} Certificate`} 
                        style={{ 
                          height: isMobile ? "200px" : "200px", 
                          marginLeft: isMobile ? "45px" : "248px", 
                          cursor:"pointer"
                        }}
                      />
                  </a>
              )
          })}
      </NukaCarousel>
    </div>
  );
};

export default Carousel;