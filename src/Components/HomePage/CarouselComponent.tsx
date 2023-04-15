import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './images/home1.jpg'
import img2 from './images/image4.jpg'
import img3 from './images/image3.jpg'



function CarouselComponent () {
    return (
    
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={img1}
                height={`600px`}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>"Maya Angelou"</h3>
                <p>When we give cheerfully and accept gratefully, everyone is blessed.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={img2}
                height={'600px'}
                alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Care To Share</h3>
            <p>Donations via this platform are secured and safe.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img3}
            height={'600px'}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>"St. Francis of Assisi"</h3>
            <p>For it is in giving that we receive.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

    )
}

export default CarouselComponent;