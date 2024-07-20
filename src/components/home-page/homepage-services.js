import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceItem from '../services/service-item';
import classes from '../services/service.module.scss';
import SwiperComps, { Slide } from '../swiper';

function HomePageServices({ services, settings }) {

    const imgmain ='/images/logo/companies/main.jpg'
    settings = {
        spaceBetween: 30,
        pagination: false,

        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className={classes.area}>
            <Container>

                <div className={classes.contentone}
                >
                    <h2 className={classes.title}>
                        Our Companies 
                    </h2>

                    <img src={imgmain} alt='' />
                </div>


                <div className={classes.contentone}
                >
                    <h2 className={classes.title}>
                        M-Tech Services

                    </h2>
                </div>
                <div className={classes.navigation__holder}>
                    <Row>
                        <Col lg={{ span: 12 }}>
                            <SwiperComps
                                settings={settings}
                                className={classes.slider}
                            >
                                {services.map((service) => (
                                    <Slide key={service.slug}>
                                        <ServiceItem service={service} />
                                    </Slide>
                                ))}
                            </SwiperComps>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

HomePageServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HomePageServices;
