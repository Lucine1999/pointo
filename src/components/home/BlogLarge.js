import React from 'react';
import { makeStyles } from '@mui/styles';
import author from '../../assets/image/home/author.png';
import { WHITE_COLOR } from '../../constants/colors';

const useLargeBlogStyles = makeStyles({
  image: {
    width: '100%'
  },
  authorWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '7px 14px',
    alignItems: 'flex-end'
  },
  blogLargeInfo: {
    backgroundColor: '#01010175',
    position: 'absolute',
    bottom: 6,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
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
    color: WHITE_COLOR,
    fontFamily: 'Verdana'
  },
  authorNameWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  tag: {
    fontSize: 14,
    color: WHITE_COLOR,
    fontStyle: 'italic',
    marginTop: 8,
    opacity: 0.9
  },
  readMore: {
    color: WHITE_COLOR,
    fontSize: 12,
    textDecoration: 'underline',
    fontFamily: 'Verdana'
  },
  blogLargeWrapper: {
    position: 'relative'
  },
  blogName: {
    fontSize: 32,
    color: WHITE_COLOR,
    fontWeight: 700,
    marginLeft: 10,
    paddingTop: 20,
    fontFamily: 'Verdana'
  }
});

const BlogLarge = (props) => {
  const { image } = props;

  const classes = useLargeBlogStyles();
  return (
    <div className={classes.blogLargeWrapper}>
      <img src={image} className={classes.image} alt="blog" />
      <div className={classes.blogLargeInfo}>
        <div className={classes.blogName}>Интересные факты о Мальдивах</div>

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
    </div>
  );
};

export default BlogLarge;
