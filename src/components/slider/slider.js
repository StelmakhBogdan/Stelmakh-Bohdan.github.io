import React from 'react';

import {
  Carousel,
  CarouselItem
} from "react-bootstrap";

import imgTitle1 from '../../img/titlePage/1.jpg';
import imgTitle2 from '../../img/titlePage/2.jpg';
import imgTitle3 from '../../img/titlePage/3.jpg';
import imgTitle4 from '../../img/titlePage/4.jpg';
import imgTitle5 from '../../img/titlePage/5.jpg';
import imgTitle6 from '../../img/titlePage/6.jpg';
import imgTitle7 from '../../img/titlePage/8.jpg';


const Slider = () => (
  <Carousel>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100 img-size"
        src={imgTitle1}
        alt="First slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle2}
        alt="Third slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle3}
        alt="Third slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle4}
        alt="Four slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle5}
        alt="Five slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle6}
        alt="Six slide"
      />
    </CarouselItem>
    <CarouselItem interval={4000}>
      <img
        className="d-block w-100"
        src={imgTitle7}
        alt="Seven slide"
      />
    </CarouselItem>
  </Carousel>
);

export default Slider;
