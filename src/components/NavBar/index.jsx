import styles from './navBar.module.css'
import separation from './../../assets/navbarSeparation.svg'
import LanguageMenu from './LanguageMenu';
import MobileMenu from './MobileMenu';
import * as React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const NavBar = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const tabs = [{
    name: "About",
    redirect: "#about"
  }, {
    name: "Skills",
    redirect: "#skills"
  }, {
    name: "Work Experience",
    redirect: "#experience"
  }, {
    name: "Projects",
    redirect: "#projects"
  }, {
    name: "Certifications",
    redirect: "#certifications"
  }, {
    name: "Contact",
    redirect: "#contact"
  }]

  return (
    <Box className={styles.navBar}>
      <Button onClick={toggleDrawer(!open)} className={styles.navBarMobile}>
        <MenuIcon sx={{ width: "50px", height: "50px", color: "white" }} />
      </Button>

      <Box className={styles.navBarBrowser}>
        {
          tabs.map((tab, i) =>
            <>
              <a href={tab.redirect} className={styles.link}>{tab.name}</a>
              <img src={separation} />
            </>
          )
        }
      </Box>

      <MobileMenu open={open} toggleDrawer={toggleDrawer} tabs={tabs} />
      <LanguageMenu />
    </Box>
  );
}

export default NavBar;