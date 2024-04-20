import styles from "../certificates.module.css";
import NukaCarousel from "nuka-carousel";
import { Prev } from "./Prev";
import { Next } from "./Next";
import { useEffect, useState } from "react";
import { certificates } from "./constants.ts";

const Carousel = () => {
  const [screenView, setScreenView] = useState('big');

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

  useEffect(() => {
    if (window.innerWidth > 900) {
      setScreenView('big')
    } else if (window.innerWidth <= 900 && window.innerWidth >= 600) {
      setScreenView('medium')
    } else {
      setScreenView('little')
    }
  }, []);

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