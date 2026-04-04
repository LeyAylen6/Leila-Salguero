import { useState, Fragment, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './navBar.module.css';

import separation from './../../assets/navbarSeparation.svg';
import LanguageMenu from './LanguageMenu/index';
import MobileMenu from './MobileMenu';
import { IconMenu } from '../icons';

const NavBar = () => {
  const { t } = useTranslation('common');

  const [open, setOpen] = useState(false);

  const toggleDrawer = useCallback((newOpen) => () => setOpen(newOpen), []);

  const tabs = [{
    id: "about",
    redirect: "#about"
  }, {
    id: "skills",
    redirect: "#skills"
  }, {
    id: "work_experience",
    redirect: "#experience"
  }, {
    id: "projects",
    redirect: "#projects"
  }, {
    id: "certifications",
    redirect: "#certifications"
  }, {
    id: "contact",
    redirect: "#contact"
  }]

  return (
    <header className={styles.navBar}>
      <button
        type="button"
        onClick={toggleDrawer(!open)}
        className={styles.navBarMobile}
        aria-expanded={open}
        aria-controls="mobile-drawer-nav"
        aria-label={open ? t('navbar.close_menu') : t('navbar.open_menu')}
      >
        <IconMenu size={50} />
      </button>

      <div className={styles.navBarBrowser}>
        {tabs.map((tab) =>
          <Fragment key={tab.id}>
            <a href={tab.redirect} className={styles.link}>
              {t(`navbar.${tab.id}`)}
            </a>
            <img src={separation} alt='Separation line' />
          </Fragment>
        )}
      </div>

      <MobileMenu open={open} toggleDrawer={toggleDrawer} tabs={tabs} />
      <LanguageMenu />
    </header>
  );
}

export default NavBar;
