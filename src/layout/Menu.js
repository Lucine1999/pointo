import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ReactComponent as Logo } from '../assets/image/logo.svg';
import { ReactComponent as MenuIcon } from '../assets/image/menu-icon.svg';
import { ReactComponent as ArrowDown } from '../assets/image/home/arrow_black.svg';
import useMenu from './useMenu';
import { navItems } from './mockdata';
import { logoWrapper, menuIconWrapper, mobileDrawerWrapper, navItemsWrapper } from './styles';
import MobileDrawer from './MobileDrawer';
import Currency from './Currency';
import Language from './Language';

const Menu = (props) => {
  const {
    classes,
    handleDrawerToggle,
    container,
    mobileOpen,
    isCurrencyDropDownOpen,
    setCurrencyDropDownOpen,
    isLanguageDropDownOpen,
    setLanguageDropDownOpen,
    currencyDropdownRef,
    languageDropdownRef
  } = useMenu(props);

  return (
    <Box className={classes.headerMenuWrapper}>
      <CssBaseline />
      <AppBar component="nav" className={classes.menuWrapper}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={menuIconWrapper}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography variant="h6" component="div" sx={logoWrapper}>
            <Logo />
          </Typography>
          <Box sx={navItemsWrapper}>
            <div ref={currencyDropdownRef} style={{ position: 'relative', marginRight: 12 }}>
              <div className={classes.currency} onMouseOver={() => setCurrencyDropDownOpen(true)}>
                ₽ (RUB) <ArrowDown />
              </div>
              {isCurrencyDropDownOpen && <Currency />}
            </div>

            <div ref={languageDropdownRef} style={{ position: 'relative', marginRight: 12 }}>
              <div className={classes.currency} onMouseOver={() => setLanguageDropDownOpen(true)}>
                Рус <ArrowDown />
              </div>
              {isLanguageDropDownOpen && <Language />}
            </div>

            <div className={classes.navItemButtonContainer}>
              {navItems.map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </div>
            <div className={classes.signUpButtonContainer}>
              <Button>Войти</Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={mobileDrawerWrapper}>
          <MobileDrawer />
        </Drawer>
      </Box>
    </Box>
  );
};

Menu.propTypes = {
  window: PropTypes.func
};

export default Menu;
