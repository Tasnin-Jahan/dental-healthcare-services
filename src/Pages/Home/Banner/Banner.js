import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/happy-woman-gettingg-dental-checkup-260nw-1914474613.jpg';
import banner2 from '../../../image/banner/istockphoto-1001145676-170667a.jpg';
import banner3 from '../../../image/banner/istockphoto-1280955204-170667a.jpg';


const Banner = () => {
    return (
        <>
            <Carousel className="mt-3">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>A healthy Smile Needs a Good Dental Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>A healthy Smile Needs a Good Dental Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>A healthy Smile Needs a Good Dental Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;