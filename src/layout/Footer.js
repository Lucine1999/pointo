import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { BLACK_COLOR, DARK_GRAY_COLOR, LIGHT_BLUE_COLOR } from '../constants/colors';
import { ReactComponent as Logo } from '../assets/image/logo.svg';
import appStore from '../assets/image/home/app-store.png';
import googlePlay from '../assets/image/home/google-play.png';
import qr from '../assets/image/home/qr.png';
import { ReactComponent as TelegramIcon } from '../assets/image/home/telegram.svg';
import { ReactComponent as VkIcon } from '../assets/image/home/vk.svg';
import { ReactComponent as OndoIcon } from '../assets/image/home/odno.svg';
import FooterBlock from './FooterBlock';
import { useWindowDimensions } from '../components/hooks/common';

const useFooterStyles = makeStyles({
  footerWrapper: {
    backgroundColor: LIGHT_BLUE_COLOR,
    marginTop: 40,
    paddingTop: 100,
    paddingBottom: 100
  },
  mainTitle: {
    color: DARK_GRAY_COLOR,
    fontSize: 24,
    fontWeight: 400,
    fontFamily: 'Verdana',
    marginBottom: 20
  },
  socialSiteWrapper: {
    display: 'flex',
    marginBottom: 30
  },
  socialSite: {
    backgroundColor: BLACK_COLOR,
    width: 45,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 25
  },
  appStore: {
    width: 186,
    marginBottom: 26
  },
  googlePlay: {
    width: 186
  },
  logo: {
    marginBottom: 36
  },
  qr: {
    width: 127,
    textAlign: 'right',
    marginLeft: 52
  },
  belowTitle: {
    fontSize: 28,
    color: DARK_GRAY_COLOR,
    fontFamily: 'Verdana',
    fontWeight: 400,
    marginBottom: 24
  },
  belowText: {
    fontSize: 20,
    fontWeight: 400,
    color: DARK_GRAY_COLOR,
    fontFamily: 'Verdana'
  }
});

const Footer = () => {
  const classes = useFooterStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.footerWrapper}>
      <Container maxWidth={width >= 1920 ? 'xl' : 'lg'}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Grid container spacing={2}>
          <Grid item lg={3} xs={12}>
            <div className={classes.mainTitle}>О компании</div>
            <div className={classes.mainTitle}>Блогерам и СМИ</div>
            <div className={classes.mainTitle}>Стать частью команды</div>
            <div className={classes.mainTitle}>Контакты</div>
            <div className={classes.mainTitle}>Помощь</div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Grid container spacing={1}>
              <Grid item md={4} sm={4} xs={6}>
                <FooterBlock />
              </Grid>
              <Grid item md={4} sm={4} xs={6}>
                <FooterBlock />
              </Grid>
              <Grid item md={4} sm={4} xs={6}>
                <FooterBlock />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} xs={12}>
            <div className={classes.socialSiteWrapper}>
              <div className={classes.socialSite}>
                <VkIcon />
              </div>
              <div className={classes.socialSite}>
                <OndoIcon />
              </div>
              <div className={classes.socialSite}>
                <TelegramIcon />
              </div>
            </div>
            <div>
              <img src={appStore} className={classes.appStore} alt="appStore" />
            </div>
            <div>
              <img src={googlePlay} className={classes.googlePlay} alt="googlePlay" />
            </div>
          </Grid>
          <Grid item lg={9} xs={12}>
            <div className={classes.belowTitle}>Мобильное приложение</div>
            <div className={classes.belowText}>
              В приложении цены на отели ещё ниже,а выбор шире!Бронирования можно оплачивать через
              Apple Pay и Android Pay.Ваучер хранится в личном кабинете и доступен,даже если нет
              интернета.
            </div>
          </Grid>
          <Grid item lg={3} xs={12}>
            <img src={qr} className={classes.qr} alt="qr" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
