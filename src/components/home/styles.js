import { makeStyles } from '@mui/styles';
import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  LIGHTEN_GRAY_COLOR,
  LIGHT_BROWN_COLOR,
  OCEAN_BLUE_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR
} from '../../constants/colors';
import { BUTTON_MAIN_STYLES } from '../../constants/common';

export const useHomeStyles = makeStyles({
  homeContentWrapper: {
    marginTop: 70
  },
  mainImage: {
    width: '100%',
    height: 536,
    objectFit: 'cover'
  },
  searchableSectionWrapper: {
    position: 'relative'
  },
  tabsWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  tabs: {
    '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
      color: WHITE_COLOR,
      fontSize: 16,
      backgroundColor: OCEAN_BLUE_COLOR,
      textTransform: 'unset',
      borderRadius: 15,
      fontFamily: 'Verdana'
    },
    '& .MuiButtonBase-root.MuiTab-root': {
      color: BLACK_COLOR,
      fontSize: 16,
      textTransform: 'unset'
    },
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    height: 48
  },
  searchableSection: {
    backgroundColor: LIGHT_BROWN_COLOR,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 36px',
    paddingBottom: 0,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  searchBarWrapper: {
    width: '100%',
    height: 'max-content',
    minHeight: 104,
    padding: '10px 36px',
    paddingBottom: 0,
    top: '60%',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0%)'
  },
  searchButtonWrapper: {
    '& button': {
      backgroundColor: ORANGE_COLOR,
      color: WHITE_COLOR,
      height: 83,
      width: 182,
      borderRadius: 15,
      marginLeft: 28,
      marginBottom: 10,
      fontFamily: 'Verdana',
      ...BUTTON_MAIN_STYLES,
      '&:hover': {
        backgroundColor: ORANGE_COLOR
      }
    }
  },
  searchableInputs: {
    backgroundColor: WHITE_COLOR,
    height: 82,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 10
  },
  specialOrderTitle: {
    color: DARK_GRAY_COLOR,
    fontSize: 32,
    fontWeight: 400,
    letterSpacing: '0.48px',
    marginBottom: 0
  },
  specialOrderSubTitle: {
    fontSize: 16,
    color: DARK_GRAY_COLOR,
    fontWeight: 400,
    opacity: 0.58,
    marginTop: 0
  },
  wonderfulVacationImg: {
    width: '100%'
  },
  specialOrdersWrapper: {
    marginBottom: 70
  },
  specialOrderSlideWrapper: {
    '& .slick-slide > div': {
      marginLeft: 9,
      marginRight: 9
    },
    '& .slick-dots': {
      bottom: -35
    },
    '& .slick-dots li button:before': {
      fontSize: 15,
      color: LIGHTEN_GRAY_COLOR,
      opacity: 0.5
    },
    '& .slick-dots li.slick-active button:before': {
      color: LIGHTEN_GRAY_COLOR,
      opacity: 1
    },
    '& .slick-prev': {
      transform: 'rotate(180deg)',
      marginTop: -40,
      left: -60
    },
    '& .slick-next': {
      right: -46
    },
    '& .slick-prev, & .slick-next': {
      boxShadow: '0 0 13px rgba(0, 0, 4, 0.15)',
      backgroundColor: '#fffff9',
      borderRadius: '50%',
      display: 'flex !important',
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5
    },
    '& .slick-next:before': {
      content: '""'
    },
    '& .slick-prev:before': {
      content: '""'
    }
  },
  blogTitle: {
    color: DARK_GRAY_COLOR,
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: '0.48px',
    fontFamily: 'Verdana'
  },
  reviewSlider: {
    marginRight: 35,
    marginLeft: 35
  }
});
