import React, { useState } from 'react';
import { useHomeStyles } from './styles';
import { ReactComponent as Arrow } from '../../assets/image/home/arrow.svg';
import { useWindowDimensions } from '../hooks/common';

const useHome = () => {
  const [value, setValue] = useState('hotels');

  const onTabChange = (_, newValue) => setValue(newValue);
  const classes = useHomeStyles();

  const settings = ({ noArrow = true, noDots = true } = {}) => {
    return {
      ...(noArrow && { arrows: false }),
      dots: !noDots,
      ...(!noArrow && {
        arrows: true,
        nextArrow: (
          <div className={classes.slickArrow}>
            <Arrow />
          </div>
        ),
        prevArrow: (
          <div className={classes.slickArrow}>
            <Arrow />
          </div>
        )
      }),
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  };
  const { width } = useWindowDimensions();

  return { value, onTabChange, classes, settings, width };
};

export default useHome;
