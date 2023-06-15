import { makeStyles } from '@mui/styles';
import { BLACK_COLOR, LIGHT_BLUE_COLOR, OCEAN_BLUE_COLOR, WHITE_COLOR } from '../constants/colors';
import { DRAWER_WIDTH } from '../constants/layout';
import { BUTTON_MAIN_STYLES } from '../constants/common';

export const useMenuStyles = makeStyles({
  currency: {
    color: BLACK_COLOR,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Verdana',
    cursor: 'pointer'
  },
  menuWrapper: {
    backgroundColor: `${LIGHT_BLUE_COLOR} !important`,
    height: 95,
    justifyContent: 'center',
    '& >div': {
      flexWrap: 'wrap'
    }
  },
  menuIcon: {
    width: 24,
    height: 24
  },
  headerMenuWrapper: {
    display: 'flex'
  },
  navItemButtonContainer: {
    '& button': {
      color: BLACK_COLOR,
      fontFamily: 'Verdana',
      ...BUTTON_MAIN_STYLES
    }
  },
  drawerWrapper: {
    textAlign: 'center'
  },
  drawerLogo: {
    marginTop: '26px !important',
    marginBottom: '20px !important'
  },
  signUpButtonContainer: {
    '& button': {
      color: `${BLACK_COLOR}`,
      border: `1px solid ${OCEAN_BLUE_COLOR}`,
      borderRadius: '15px',
      width: 92,
      height: 40,
      backgroundColor: `${WHITE_COLOR}`,
      fontFamily: 'Verdana',
      ...BUTTON_MAIN_STYLES
    }
  }
});

export const menuIconWrapper = {
  mr: 2,
  display: { sm: 'none' }
};
export const logoWrapper = {
  flexGrow: 1,
  display: { xs: 'none', sm: 'block' }
};
export const navItemsWrapper = {
  display: { xs: 'none', sm: 'flex' },
  alignItems: { sm: 'center' }
};
export const mobileDrawerWrapper = {
  display: { xs: 'block', sm: 'none' },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
};
