import { Col, Container, Row } from 'react-bootstrap';
import classes from './about.module.scss';

function AboutOne() {

    const pattern = '/images/about/pattern.png'
    const imageiconabout = '/images/about/1-1.jpg'
    const experienceImage = '/images/about/avatar.png'

    return (
        <div className={classes.area}>

                    <Container>
                        <div className={classes.section}>
                            <div className={classes.section__wrap}>
                                <div className={classes.section__title}>
                                    <span>About Us</span>
                                    <h2>Almawared Advance Tech Co.</h2>
                                </div>
                                <p
                                    className={classes.section__desc}>
                                    Founded in 2013, M-TECH provides wide range of services that includes engineering,
                                    procurement and execution to the oil & gas, petrochemicals & industrial cities.
                                </p>
                            </div>
                        </div>

                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img__wrap}>
                                    <div className={classes.pattern}>
                                        <img
                                            src={pattern}
                                            alt="About-Main-img-one"
                                        />
                                    </div>
                                    <div className={classes.img}>
                                        <img
                                            src={imageiconabout}
                                            alt="About-Main-img-two"
                                            className="img-full"
                                        />
                                    </div>
                                </div>
                            </Col>

                            <Col lg={{ span: 6 }}>
                                <div className={classes.content}>
                                    <div className={classes.experience}>
                                        <div
                                            className={
                                                classes.experience_content
                                            }
                                        >
                                            <h2
                                                className={classes.our_progress}
                                            >
                                                MISSION <span>STATEMENT</span>
                                            </h2>
                                        </div>
                                        <div className={classes.experience_img}>
                                            <img
                                                src={experienceImage}
                                                alt="about-experience-img-three"
                                            />
                                        </div>
                                    </div>
                                    <h3 className={classes.subtitle}>
                                        It is the mission of M-TECH to provide quality services to oil & gas, petrochemicals companies And industrial cities in Saudi Arabia and GCC.
                                    </h3>
                                    <p className={classes.desc}>
                                        Through our core values, we aim to compete with the top names in the industry while maintaining excellencein service and standards.
                                    </p>

                                    <p className={classes.desc}>
                                        Through fiscal responsibility andethical practices, M-TECH aims to offer high quality services and deliverables.
                                        What separates us fromthe competition is the attention todetail and personal attention thateach client and each project receives.
                                    </p>

                                </div>
                            </Col>
                        </Row>
                    </Container>
        </div>
    );
}
export default AboutOne;
