import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { LIGHT_GRAY_COLOR } from '../../constants/colors';

const useSearchInputStyles = makeStyles({
  searchInput: {
    '& fieldset': {
      border: 'none'
    },
    '& textarea::placeholder': {
      color: LIGHT_GRAY_COLOR,
      fontWeight: 700,
      opacity: 1,
      fontFamily: 'Verdana'
    },
    '& >.MuiInputBase-root': {
      borderRadius: 0,
      height: 24,
      paddingTop: 0,
      paddingBottom: 0,
      fontFamily: 'Verdana'
    },
    width: '100%'
  }
});

const SearchInput = ({ icon, placeholder, width, noBorder }) => {
  const classes = useSearchInputStyles();

  return (
    <div style={{ flex: 1 }}>
      <TextField
        multiline={false}
        style={{ borderRight: noBorder ? 'none' : `1px solid ${LIGHT_GRAY_COLOR}` }}
        sx={{ minWidth: width || 224 }}
        className={classes.searchInput}
        placeholder={placeholder}
        InputProps={{
          endAdornment: icon
        }}
      />
    </div>
  );
};

export default SearchInput;
