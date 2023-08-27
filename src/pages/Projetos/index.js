import React from 'react';
import './projeto.css';
import Carousel from 'react-bootstrap/Carousel';

function Projetos() {
    return (
        <div className='box-projetos'>
            <Carousel>
                <Carousel.Item interval={1200}>
                    <img src={require('./img-projeto/foto1.png')} alt="" />

                    <img src={require('./img-projeto/foto2.png')} alt="" />

                    <img src={require('./img-projeto/foto3.png')} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={1200}>
                    <img src={require('./img-projeto/foto5.jpeg')} alt="" />

                    <img src={require('./img-projeto/foto11.jpeg')} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={1200}>
                    <img src={require('./img-projeto/foto6.jpeg')} alt="" />

                    <img src={require('./img-projeto/foto7.jpeg')} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={1200}>
                    <img src={require('./img-projeto/foto8.jpeg')} alt="" />

                    <img src={require('./img-projeto/foto9.jpeg')} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={1200}>
                    <img src={require('./img-projeto/foto10.jpeg')} alt="" />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
export default Projetos;