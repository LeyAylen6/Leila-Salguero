import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./certifications.module.css"
import "../../App.css"

import { certifications, settings } from "./constants.js";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation('common');

  return (
    <div id='certifications' className={styles.certificatesContainer}>
      <h2>{t('certificates')}</h2>

      <section className="carousel-container" style={{ width: "93%", paddingBottom: "5rem" }}>
        <Slider {...settings}>
          {certifications.map((certificate, index) => (
            <a href={certificate.link} key={index} className={styles.imageContainer}>
              <img src={certificate.photo} alt={`${certificate.name} Certificate`} className={styles.image} />
            </a>
          ))}
        </Slider>
      </section>

    </div>
  );
}

export default Certifications;