import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ISkin} from "../../dto/IChampuionFull";
import {SPLASH_IMG} from "../../Constants";
import './Slider.scss'

interface Props {
  skins: ISkin[],
  name: string
}

type LazyLoadTypes = "ondemand" | "progressive";

const SliderChamp = ({skins, name}: Props) => {

  const lazyLoad: LazyLoadTypes = 'ondemand'
  const settings = {
    lazyLoad,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider',
    initialSlide: 2,
  };
  return (
    <div className='block__slider'>
      <h2 className='block__slider--tittle'>Skins</h2>
      <Slider {...settings}>
        {skins.map(el =>
          <div className='slider__item'>
            <img src={`${SPLASH_IMG}${name}_${el.num}.jpg`} alt=""/>
            <h3>{el.name === 'default' ? name : el.name}</h3>
          </div>)}
      </Slider>
    </div>
  )
}

export default SliderChamp;