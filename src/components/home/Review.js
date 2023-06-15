import React from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  EXTRA_LIGHT_BLUE_COLOR,
  GRAY_BLACK_COLOR,
  ORANGE_COLOR
} from '../../constants/colors';
import author from '../../assets/image/home/author.png';
import { ReactComponent as ReviewCalendar } from '../../assets/image/home/review-calendar.svg';
import { ReactComponent as ReviewPerson } from '../../assets/image/home/review-person.svg';
import { ReactComponent as Mark } from '../../assets/image/home/mark.svg';
import { useWindowDimensions } from '../hooks/common';

const useReviewStyles = makeStyles({
  reviewWrapper: {
    border: `1px solid ${GRAY_BLACK_COLOR}`,
    borderRadius: 15,
    padding: 14,
    position: 'relative'
  },
  image: {
    width: 147
  },
  reviewImageWrapper: {
    display: 'flex',
    marginBottom: 18,
    alignItems: 'center',
    paddingTop: 10
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: GRAY_BLACK_COLOR,
    fontFamily: 'Verdana'
  },
  reviewTitleText: {
    color: DARK_GRAY_COLOR,
    fontSize: 14,
    fontFamily: 'Verdana',
    fontWeight: 400
  },
  reviewTitleWrapper: {
    marginLeft: 15
  },
  reviewTitleSize: {
    width: '80%',
    marginBottom: 20
  },
  seeMore: {
    color: EXTRA_LIGHT_BLUE_COLOR,
    fontSize: 14,
    fontFamily: 'Verdana',
    fontWeight: 400,
    cursor: 'pointer'
  },
  reviewAuthorWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  date: {
    color: DARK_GRAY_COLOR,
    opacity: 0.58,
    fontSize: 14,
    fontFamily: 'Verdana',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10
  },
  guests: {
    color: DARK_GRAY_COLOR,
    opacity: 0.58,
    fontSize: 14,
    fontFamily: 'Verdana',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: 11
  },
  reviewDateWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  authorName: {
    fontSize: 14,
    color: DARK_GRAY_COLOR,
    fontWeight: 400,
    marginRight: 20
  },
  rating: {
    color: BLACK_COLOR,
    fontWeight: 700,
    fontSize: 14,
    marginLeft: 10
  },
  authorNameWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10
  },
  new: {
    color: ORANGE_COLOR,
    border: `1px solid ${ORANGE_COLOR}`,
    padding: '0 8px',
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 15
  }
});

const Review = (props) => {
  const { image } = props;
  const classes = useReviewStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.reviewWrapper}>
      <div className={classes.new}>New</div>
      <div className={classes.reviewImageWrapper} style={width < 500 ? { flexWrap: 'wrap' } : {}}>
        <img src={image} className={classes.image} alt="review" />
        <div className={classes.reviewTitleWrapper}>
          <span className={classes.reviewTitle}>Апартамент</span>
          <br />
          <span className={classes.reviewTitleText}>
            Апартамент 1 в самом центре у Кремля,Баумана и озера Кабан
          </span>
        </div>
      </div>
      <div>
        <span className={classes.reviewTitle}>вчера</span>
        <br />
        <div className={clsx(classes.reviewTitleText, classes.reviewTitleSize)}>
          Более доброжелательных, заботливых и внимательных хозяев я еще не встречала. Квартира
          абсолютно соответствует описанию, в ней есть все для жизни. Мы жили около месяца,
          наслаждались расположением в центре...<span className={classes.seeMore}>ещё...</span>
        </div>
      </div>

      <div className={classes.reviewAuthorWrapper}>
        <div>
          <img src={author} alt="review-author" />
        </div>
        <div>
          <div className={classes.authorNameWrapper}>
            <div className={classes.authorName}>Натали</div>
            <div>
              <Mark />
              <span className={classes.rating}>10,0</span>
            </div>
          </div>
          <div className={classes.reviewDateWrapper}>
            <div className={classes.date}>
              <ReviewCalendar className={classes.icon} />
              <div>Март 2023,24 суток</div>
            </div>
            <div className={classes.guests}>
              <ReviewPerson className={classes.icon} />
              <div>2 гостя</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
