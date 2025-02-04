import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import star from "./../../../assets/commons/star.svg"

import { useTranslation } from 'react-i18next';

const MobileMenu = ({ open, toggleDrawer, tabs }) => {
  const { t } = useTranslation('common');

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List sx={{ paddingTop: 15 }}>
          {tabs.map((tab) => (
            <ListItem key={tab.id} disablePadding>
              <ListItemButton href={tab.redirect}>
                <ListItemIcon>
                  <img src={star} width="30px" height="30px" alt='Star logo' />
                </ListItemIcon>
                <ListItemText primary={t(`navbar.${tab.id}`)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MobileMenu;