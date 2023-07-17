import styles from "./certificates.module.css";
import NukaCarousel from "nuka-carousel";
import Java from './../../assets/Java.jpeg';
import Scrum from './../../assets/Scrum.png';
import Testing from './../../assets/Testing.jpeg';
import FullStack from './../../assets/Certificado Full Stack.jpeg'
import { Link } from "react-router-dom";
import { Prev } from "./Prev";
import { Next } from "./Next";


const Carousel = () => {

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
          transform: "scale(3)",
          backgroundColor: "transparent",
          margin: "8px",
          marginBottom: "20px",
          fill: "rgb(255,0,255)"
        },
        prevButtonText: <Prev />,
        nextButtonText: <Next />,
      }
    }

  return (
    <div style={{ marginBottom:"500px"}}>
      <NukaCarousel {...params}>
          {certificates.map((certificate, index)=> {
              return (
                  <Link to={certificate.link} key={index} className={`${styles[certificate.name]}`}>
                      <img src={certificate.photo} alt={`${certificate.name} Certificate`} style={{ height:"800px", marginLeft: "248px", cursor:"pointer"}}/>
                  </Link>
              )
          })}
      </NukaCarousel>
    </div>
  );
};

export default Carousel;