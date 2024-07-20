import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import { Container, Row } from 'react-bootstrap';

function ConstructionPage({ footerItems }) {
    const imagePath = 'images/rich-text/trucks-service-03.jpg';
    const imagerental01 = 'images/rich-text/rental01.png';
    const imagerental02 = 'images/rich-text/rental02.png';
    const imagerental03 = 'images/rich-text/rental03.png';
    const imagerental04 = 'images/rich-text/rental04.png';

    return (
        <>
            <Head>
                <title>Services 03- MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Services"
                title="Equipment Rental"
            />

            <div className={classes.area}>
                <Container>
                    <Row className="">

                        <Col lg={{ span: 9 }} className="pe-lg-20">
                            <div className={classes.content}>
                                <h2 className={classes.title}>Equipment Rental</h2>
                                <h3 className={classes.subtitle}>DUMP TRUCKS FLEET</h3>
                                <p className={classes.desc}>
                                    M-TECH and its affiliates have number of dump trucks that can supportconstruction & civil projects.
                                    M-TECH professional team can manage the client requirements during the projects with approved drivers
                                    controlling the time and assuring the specification and quality.
                                </p>

                                <div className="banner">
                                    <img
                                        className="i"
                                        src={imagePath}
                                        alt='trucks-service-03'
                                    />
                                </div>
                            </div>
                            <div className={classes.content}>
                                <h3 className={classes.subtitle}>EQUIPMENTS RENTAL</h3>
                            </div>
                        </Col>

                        <div className="banner">
                            <img
                                className=""
                                src={imagerental01}
                                alt='rental-eq-01'
                            />
                        </div>

                        <div className="banner">
                            <img
                                className=""
                                src={imagerental02}
                                alt='rental-eq-02'
                            />
                        </div>

                        <div className="banner">
                            <img
                                className=""
                                src={imagerental03}
                                alt='rental-eq-03'
                            />
                        </div>

                        <div className="banner">
                            <img
                                className=""
                                src={imagerental04}
                                alt='rental-eq-04'
                            />
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const footerItems = getAllItems('footer');
    return {
        props: {
            footerItems,
        },
    };
}

ConstructionPage.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ConstructionPage;
