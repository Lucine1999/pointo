import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactComponent as Logo } from '../assets/image/logo.svg';
import { navItems } from './mockdata';
import { useMenuStyles } from './styles';

const MobileDrawer = (props) => {
  const { handleDrawerToggle } = props;
  const classes = useMenuStyles();

  return (
    <Box onClick={handleDrawerToggle} className={classes.drawerWrapper}>
      <Typography variant="h6" className={classes.drawerLogo}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileDrawer;
