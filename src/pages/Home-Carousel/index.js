import React from 'react';
import './carousel.css';
import './carouselQuery.css';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
    return (
        <div className="carouselPai">

            <Carousel>

                <Carousel.Item interval={1000}>
                    <img src={require('./img-carousel/img-slide1.png')} alt="Img 1" /> 
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img src={require('./img-carousel/img-slide2.png')} alt="Img 1" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={require('./img-carousel/img-slide3.png')} alt="Img 1" />
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Slide;