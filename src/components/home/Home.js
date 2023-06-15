import React from 'react';
import { Button, Container, Grid, Tab, Tabs } from '@mui/material';
import Slider from 'react-slick';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import mainImage from '../../assets/image/home/main_image.png';
import specialOrder1 from '../../assets/image/home/special-order-1.png';
import specialOrder2 from '../../assets/image/home/special-order-2.png';
import specialOrder3 from '../../assets/image/home/special-order-3.png';
import blog1 from '../../assets/image/home/blog-1.png';
import blog2 from '../../assets/image/home/blog-2.png';
import blog3 from '../../assets/image/home/blog-3.png';
import blog4 from '../../assets/image/home/blog-4.png';
import blog5 from '../../assets/image/home/blog-5.png';
import review from '../../assets/image/home/review-1.png';
import wonderfulVacationScheme from '../../assets/image/home/wonderful-vacation.png';
import SearchInput from './SearchInput';
import { ReactComponent as SearchIcon } from '../../assets/image/home/search-icon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/image/home/calendar-icon.svg';
import { ReactComponent as PersonIcon } from '../../assets/image/home/person-icon.svg';
import useHome from './useHome';
import SpecialOrderItem from './SpecialOrderItem';
import Blog from './Blog';
import BlogLarge from './BlogLarge';
import Review from './Review';
import clsx from 'clsx';

const Home = () => {
  const { value, onTabChange, classes, settings, width } = useHome();

  return (
    <>
      <Header />
      <section className={classes.homeContentWrapper}>
        <div className={classes.searchableSectionWrapper}>
          <img src={mainImage} className={classes.mainImage} alt="mainImage" />
          <div className={classes.tabsWrapper}>
            <Tabs value={value} onChange={onTabChange} className={classes.tabs} indicatorColor={''}>
              <Tab value="hotels" label="Отели" className={classes.tab} />
              <Tab value="entertainment" label="Развлечения" className={classes.tab} />
              <Tab value="rent" label="Аренда" className={classes.tab} />
            </Tabs>
          </div>
          <div className={classes.searchBarWrapper}>
            <Container maxWidth={width >= 1920 ? 'xl' : 'lg'}>
              <div className={classes.searchableSection}>
                <div className={classes.searchableInputs}>
                  <SearchInput
                    placeholder="Выбор населенного пункта"
                    icon={<SearchIcon />}
                    width={270}
                  />
                  <SearchInput placeholder="Месяц или даты" icon={<CalendarIcon />} />
                  <SearchInput placeholder="Количество" icon={<PersonIcon />} noBorder />
                </div>
                <div className={classes.searchButtonWrapper}>
                  <Button>Найти</Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
      <Container maxWidth={width >= 1920 ? 'xl' : 'lg'}>
        <section className={classes.specialOrdersWrapper}>
          <h2 className={classes.specialOrderTitle}>Спецпредложения</h2>
          <p className={classes.specialOrderSubTitle}>
            Акции, скидки и специальные предложения для вас.
          </p>
          <Slider {...settings({ noDots: false })} className={classes.specialOrderSlideWrapper}>
            <SpecialOrderItem image={specialOrder1} />
            <SpecialOrderItem image={specialOrder2} />
            <SpecialOrderItem image={specialOrder3} />
            <SpecialOrderItem image={specialOrder1} />
            <SpecialOrderItem image={specialOrder2} />
            <SpecialOrderItem image={specialOrder3} />
          </Slider>
        </section>
        <section>
          <img
            src={wonderfulVacationScheme}
            alt="wonderful-vacation"
            className={classes.wonderfulVacationImg}
          />
        </section>
        <section>
          <h2 className={classes.blogTitle}>Блог о путешествиях</h2>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Blog image={blog1} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Blog image={blog2} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Blog image={blog3} />
            </Grid>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <BlogLarge image={blog5} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Blog image={blog4} />
            </Grid>
          </Grid>
        </section>
        <section>
          <h2 className={classes.blogTitle}>Последные отзывы</h2>

          <Slider
            {...settings({ noArrow: false })}
            className={clsx(classes.specialOrderSlideWrapper, classes.reviewSlider)}>
            <Review image={review} />
            <Review image={review} />
            <Review image={review} />
            <Review image={review} />
            <Review image={review} />
            <Review image={review} />
          </Slider>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
