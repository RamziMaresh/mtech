import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import SwiperComps, { Slide } from '../swiper';
import classes from './team.module.scss';

function TeamTwo({ teamItemsTwo, settings }) {
    settings = {
        pagination: false,
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay:true,
        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
                autoplay:true,

            },
            0: {
                slidesPerView: 1,
                autoplay:true,
            },
        },
    };
    return (
        <div className={classes.area_02}>
            <Container>
                <Row>
                    <div className={classes.contentone}>
                        <h2 className={classes.title}>
                            Certificates
                        </h2>
                    </div>
                    <Col lg={{ span: 12 }}>
                        <SwiperComps settings={settings}>
                            {teamItemsTwo?.map((teamItemTwo) => (
                                <Slide key={teamItemTwo.id}>
                                    <div className={classes.item}>
                                        <div className={classes.img}>
                                            <img
                                                src={teamItemTwo?.image}
                                                alt={teamItemTwo?.alt}
                                                className="img-full"
                                            />

                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </SwiperComps>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
TeamTwo.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default TeamTwo;
