import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import { Container, Row } from 'react-bootstrap';
import RichTextTwo from '../../components/rich-text-two';


function ConstructionPage({ footerItems, richTextsTwo, }) {
    const imagePath = 'images/rich-text/epoxy01.jpg';

    return (
        <>
            <Head>
                <title>Services 02- MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Services"
                title="Construction & Civil"
            />

            <div className={classes.area}>
                <Container>
                    <Row className="">

                        <Col lg={{ span: 9 }} className="pe-lg-20">

                            {/** 
                        <div className="banner">
                            <img
                                className="img-full"
                                src={imagePath}
                                alt='Maintenance-Repairing'
                            />
                        </div>
                        */}
                            <div className={classes.content}>
                                <h2 className={classes.title}>Construction & Civil</h2>
                                <p className={classes.desc}>
                                    M-TECH has successfully completed number
                                    of civil contracts on variousprojects meeting the client targets, specification, and expectation.

                                </p>
                                <p className={classes.desc}>
                                    M-TECH -with its experienced & competent team- has the ability to manageand run different sizes of construction & civil projects.
                                </p>

                                <h3 className={classes.subtitle}>
                                    Below is the construction & civil categories, that M-TECH focusing on:
                                </h3>
                                <h3 className={classes.desc}>- Constructionof Commercial Buildings& Facade</h3>
                                <h3 className={classes.desc}>- Commercial BuildingFinishing & Renovation</h3>
                                <h3 className={classes.desc}>- Constructionof Landscaping, Road& Pavement</h3>
                                <h3 className={classes.desc}>- Train Bridges Repairing,Reinforcing & Maintenance</h3>
                                <h3 className={classes.desc}>- Fencing, Security Guard Rooms& Related</h3>
                            </div>

                            <RichTextTwo richTextsTwo={richTextsTwo} />


                            <div className={classes.content}>
                                <h3 className={classes.subtitletwo}>EPOXY APPLICATION</h3>
                                <p className={classes.desc}>
                                    M-TECH is an approved epoxy applicator, with trainedand skilled manpower under a supervision of experts.
                                    From high density epoxy flooring to low density, M-TECHcan provide a variety of selections based on the clientfunctions.
                                    M-TECH has the ability to provide technicalrecommendations through its international partner ITWPerformance Polymers in Italy.
                                </p>
                            </div>
                            <div className="banner">
                                <img
                                    className="img-full"
                                    src={imagePath}
                                    alt='EPOXY-APPLICATION-img'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const footerItems = getAllItems('footer');
    const richTextsTwo = getAllItems('rich-text-two');

    return {
        props: {
            footerItems,
            richTextsTwo,
        },
    };
}

ConstructionPage.propTypes = {
    richTextsTwo: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ConstructionPage;
