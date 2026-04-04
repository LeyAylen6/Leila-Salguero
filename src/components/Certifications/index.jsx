import React from 'react';
import Slider from 'react-slick';

import "../../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./certifications.module.css"

import { certificates, settings } from "./constants.jsx";
import { useTranslation } from "react-i18next";

const SliderDefault = Slider.default || Slider;

const Certifications = () => {
  const { t } = useTranslation('common');
  
  return (
    <div id='certifications' className={styles.certificatesContainer}>
      <h2>{t('certificates')}</h2>
      <section className="carousel-container" style={{ width: "93%", paddingBottom: "2rem" }}>
        <SliderDefault {...settings}>
          {certificates.map((certificate, index) => (
            <a href={certificate.link || ""} key={index} className={styles.imageContainer}>
              <img src={certificate.photo} alt={`${certificate.name} Certificate`} className={styles.image} />
            </a>
          ))}
        </SliderDefault>
      </section>
    </div>
  );
}

export default Certifications;