import React from 'react';
import { WHITE_COLOR } from '../constants/colors';
import { makeStyles } from '@mui/styles';

const useDropdownStyles = makeStyles({
  dropdownMenu: {
    position: 'absolute',
    background: '#00000042',
    borderRadius: 4,
    padding: 10
  },
  dropdownItem: {
    color: WHITE_COLOR,
    cursor: 'pointer'
  }
});

const Language = () => {
  const classes = useDropdownStyles();
  return (
    <div className={classes.dropdownMenu}>
      <div className={classes.dropdownItem}>Item 1</div>
      <div className={classes.dropdownItem}>Item 2</div>
      <div className={classes.dropdownItem}>Item 3</div>
    </div>
  );
};

export default Language;
