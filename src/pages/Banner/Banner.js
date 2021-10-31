import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/krka-waterfalls-krka-national-park-croatia_333098-190.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Bangladesh waterfalls</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/seljalandsfoss-waterfall-iceland-guy-red-jacket-looks-seljalandsfoss-waterfall_335224-599.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     <h1>
       WaterFall is God Gifted
     </h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/waterfall-samoa_53876-138041.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     <h1>Tour and Travel, And be happy!</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;