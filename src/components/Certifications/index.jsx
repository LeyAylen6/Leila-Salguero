import React, { useMemo, useSyncExternalStore } from 'react';
import Slider from 'react-slick';

import "../../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./certifications.module.css"

import { certificates, certificationsSliderBase, CERTIFICATIONS_MOBILE_MEDIA } from "./constants.jsx";
import { useTranslation } from "react-i18next";

const SliderDefault = Slider.default || Slider;

function useMobileCertificationsViewport() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(CERTIFICATIONS_MOBILE_MEDIA);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(CERTIFICATIONS_MOBILE_MEDIA).matches,
    () => false
  );
}

const Certifications = () => {
  const { t } = useTranslation('common');
  const mobile = useMobileCertificationsViewport();
  const settings = useMemo(
    () => ({
      ...certificationsSliderBase,
      slidesToShow: mobile ? 1 : 2,
      arrows: !mobile,
    }),
    [mobile]
  );

  return (
    <div id='certifications' className={styles.certificatesContainer}>
      <h2>{t('certificates')}</h2>
      <section className="carousel-container" style={{ width: "93%" }}>
        <SliderDefault key={mobile ? 'cert-1' : 'cert-2'} {...settings}>
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