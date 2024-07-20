import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function RichText({ richTexts }) {
    return (
        <div className={classes.item}>
            {richTexts?.map((richText) => (
                <Row key={richText.id}>
                    <Col lg={{ span: 8 }}>
                        <div className={`${classes.group_image} pb-20`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richText?.groupImageOne}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richText?.groupImageTwo}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                        </div>
                        <div className={`${classes.group_image}`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richText?.groupImageThree}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richText?.groupImageFour}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

RichText.propTypes = {
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default RichText;
