import { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './navBar.module.css'

import separation from './../../assets/navbarSeparation.svg'
import LanguageMenu from './LanguageMenu/index';
import MobileMenu from './MobileMenu';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const NavBar = () => {
  const { t } = useTranslation('common');

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

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
    <Box className={styles.navBar}>
      <Button onClick={toggleDrawer(!open)} className={styles.navBarMobile}>
        <MenuIcon sx={{ width: "50px", height: "50px", color: "white" }} />
      </Button>

      <Box className={styles.navBarBrowser}>
        {tabs.map((tab) =>
          <Fragment key={tab.id}>
            <a href={tab.redirect} className={styles.link}>
              {t(`navbar.${tab.id}`)}
            </a>
            <img src={separation} />
          </Fragment>
        )}
      </Box>

      <MobileMenu open={open} toggleDrawer={toggleDrawer} tabs={tabs} />
      <LanguageMenu />
    </Box>
  );
}

export default NavBar;