import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function RichTextTwo({ richTextsTwo }) {
    return (
        <div className={classes.item}>
            {richTextsTwo?.map((richTextsTwo) => (
                <Row className="" key={richTextsTwo.id}>

                    <Col lg={{ span: 8 }}>
                        <div className={`${classes.group_image} pb-20`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richTextsTwo?.groupImageOne}
                                    alt={richTextsTwo?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richTextsTwo?.groupImageTwo}
                                    alt={richTextsTwo?.groupImageAlt}
                                />
                            </div>
                        </div>
                        <div className={`${classes.group_image}`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richTextsTwo?.groupImageThree}
                                    alt={richTextsTwo?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richTextsTwo?.groupImageFour}
                                    alt={richTextsTwo?.groupImageAlt}
                                />
                            </div>
                        </div>
                    </Col>

                </Row>
            ))}
        </div>
    );
}

RichTextTwo.propTypes = {
    richTextsTwo: PropTypes.instanceOf(Object).isRequired,
};

export default RichTextTwo;
