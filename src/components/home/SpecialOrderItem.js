import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  DARKER_GRAY_COLOR,
  OCEAN_BLUE_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR
} from '../../constants/colors';
import { ReactComponent as Mark } from '../../assets/image/home/mark.svg';
import { ReactComponent as BlueLargeMark } from '../../assets/image/home/blue-large-mark.svg';
import { ReactComponent as Feature1 } from '../../assets/image/home/feature-icon-1.svg';
import { ReactComponent as Feature2 } from '../../assets/image/home/feature-icon-2.svg';
import { ReactComponent as Feature3 } from '../../assets/image/home/feature-icon-3.svg';

const useSpecialOrderStyles = makeStyles({
  image: {
    width: '100%'
  },
  reviewsWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  review: {
    fontSize: 12,
    fontWeight: 400,
    color: WHITE_COLOR,
    fontFamily: 'Verdana'
  },
  type: {
    fontSize: 14,
    fontWeight: 400,
    color: WHITE_COLOR,
    fontFamily: 'Verdana'
  },
  specialOrderFooter: {
    backgroundColor: 'rgb(55 54 53 / 85%)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 4,
    padding: '14px'
  },
  specialOrderWrapper: {
    position: 'relative',
    zIndex: 6
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: WHITE_COLOR,
    fontFamily: 'Verdana'
  },
  place: {
    fontSize: 12,
    fontWeight: 700,
    color: WHITE_COLOR,
    fontFamily: 'Verdana'
  },
  typeAction: {
    color: OCEAN_BLUE_COLOR,
    fontSize: 12,
    textDecoration: 'underline',
    fontFamily: 'Verdana'
  },
  featuresWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
  feature: {
    backgroundColor: OCEAN_BLUE_COLOR,
    width: 27,
    height: 27,
    borderRadius: 40,
    padding: 6,
    marginRight: 9
  },
  priceDiscountDesc: {
    backgroundColor: ORANGE_COLOR,
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: 700,
    width: '120%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: '100%',
    padding: 5,
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Verdana'
  },
  specialOrderHeader: {
    marginBottom: -4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '50px'
  },
  rating: {
    color: OCEAN_BLUE_COLOR,
    fontSize: 14,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center'
  },
  opinion: {
    color: WHITE_COLOR,
    fontSize: 12,
    fontWeight: 700,
    marginLeft: 10,
    fontFamily: 'Verdana'
  },
  ratingAndOpinion: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: DARKER_GRAY_COLOR,
    width: '100%',
    borderTopRightRadius: 5,
    height: '100%',
    justifyContent: 'flex-end',
    padding: 5,
    marginLeft: -20
  }
});

const SpecialOrderItem = ({ image }) => {
  const classes = useSpecialOrderStyles();
  return (
    <>
      <div className={classes.specialOrderHeader}>
        <div className={classes.priceDiscountDesc}>-10% НА БРОНИРОВАНИЕ</div>
        <div className={classes.ratingAndOpinion}>
          <div>
            <div style={{ display: 'flex' }}>
              <BlueLargeMark />
              <span className={classes.rating}>9.0</span>
              <span className={classes.opinion}>Великолепно</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.specialOrderWrapper}>
        <img src={image} className={classes.image} alt="special order" />
        <div className={classes.specialOrderFooter}>
          <div className={classes.reviewsWrapper}>
            <div className={classes.review}>148 отзывов</div>
            <div className={classes.type}>HOTEL</div>
          </div>
          <div className={classes.nameWrapper}>
            <div>
              <div className={classes.name}>Thompson&apos;s Best Value Inn</div>
              <div className={classes.place}>
                <Mark />
                Томпсон, Канада
              </div>
            </div>
            <a className={classes.typeAction} href="#">
              Размещение
            </a>
          </div>
          <div className={classes.featuresWrapper}>
            <Feature1 className={classes.feature} />
            <Feature2 className={classes.feature} />
            <Feature3 className={classes.feature} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOrderItem;
