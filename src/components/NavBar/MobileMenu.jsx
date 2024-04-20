import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import star from "./../../assets/commons/star.svg"

const MobileMenu = ({ open, toggleDrawer, tabs }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List sx={{ paddingTop: 15 }}>
          {tabs.map((tab, index) => (
            <ListItem key={`${tab.name}-${index}`} disablePadding>
              <ListItemButton href={tab.redirect}>
                <ListItemIcon>
                  <img src={star} width="30px" height="30px" />
                </ListItemIcon>
                <ListItemText primary={tab.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MobileMenu;