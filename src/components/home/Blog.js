import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  LIGHTEN_BLUE_COLOR,
  LIGHTEST_GRAY_COLOR
} from '../../constants/colors';
import author from '../../assets/image/home/author.png';

const useBlogStyles = makeStyles({
  blogWrapper: {
    marginBottom: 36
  },
  image: {
    width: '100%'
  },
  blogNameWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 14
  },
  blogName: {
    color: LIGHTEN_BLUE_COLOR,
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Verdana'
  },
  blogDate: {
    opacity: 0.58,
    color: BLACK_COLOR,
    fontWeight: 400,
    fontSize: 12,
    fontFamily: 'Verdana'
  },
  authorWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: LIGHTEST_GRAY_COLOR,
    border: '1px solid rgb(0 0 0 / 10%)',
    opacity: 0.9,
    borderRadius: 15,
    padding: '7px 14px',
    alignItems: 'flex-end'
  },
  author: {
    width: 64,
    height: 64
  },
  authorName: {
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 16,
    textAlign: 'center',
    fontFamily: 'Verdana'
  },
  authorNameWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  tag: {
    fontSize: 14,
    color: DARK_GRAY_COLOR,
    fontStyle: 'italic',
    marginTop: 8,
    opacity: 0.9
  },
  readMore: {
    color: LIGHTEN_BLUE_COLOR,
    fontSize: 12,
    textDecoration: 'underline',
    fontFamily: 'Verdana'
  }
});

const Blog = (props) => {
  const classes = useBlogStyles();
  const { image } = props;
  return (
    <div className={classes.blogWrapper}>
      <img src={image} className={classes.image} alt="blog" />
      <div className={classes.blogNameWrapper}>
        <div className={classes.blogName}>Куда поехать в апрелье 2023 года?</div>
        <div className={classes.blogDate}>31.03.2022</div>
      </div>
      <div className={classes.authorWrapper}>
        <div className={classes.authorNameWrapper}>
          <img src={author} className={classes.author} alt="author" />
          <div className={classes.authorName}>
            Иван <br /> <b>Бахтин</b>
            <div className={classes.tag}>#Путешествие</div>
          </div>
        </div>
        <div>
          <a className={classes.readMore} href="#">
            Перейти к блоку
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
