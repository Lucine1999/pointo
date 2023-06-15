import React from 'react';
import { DARK_GRAY_COLOR } from '../constants/colors';
import { makeStyles } from '@mui/styles';

const footerBlockStyles = makeStyles({
  mainTitle: {
    color: DARK_GRAY_COLOR,
    fontSize: 24,
    fontWeight: 400,
    fontFamily: 'Verdana',
    marginBottom: 36
  },
  smallTitle: {
    fontSize: 18,
    color: DARK_GRAY_COLOR,
    fontFamily: 'Verdana',
    marginBottom: 14
  }
});

const FooterBlock = () => {
  const classes = footerBlockStyles();
  return (
    <div>
      <div className={classes.mainTitle}>Клиентам</div>
      <div className={classes.smallTitle}>Личный кабинет</div>
      <div className={classes.smallTitle}>База знаний</div>
      <div className={classes.smallTitle}>Распродажи</div>
      <div className={classes.smallTitle}>Пожелания</div>
    </div>
  );
};

export default FooterBlock;
