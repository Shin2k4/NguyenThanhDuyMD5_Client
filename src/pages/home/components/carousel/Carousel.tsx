import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss'

function AppCarousel() {
    return (
        <div className='Crs_item'>
            <Carousel>
                <Carousel.Item interval={500}>
                    <div className='item'>
                        <img src="../../../../../public/sub2-16925001163071647798912.webp" />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500} >
                    <div className='item'>
                        <img src="../../../../../public/sub2-16925001163071647798912.webp" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='item'>
                        <img src="../../../../../public/sub2-16925001163071647798912.webp" />
                    </div> 
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AppCarousel;