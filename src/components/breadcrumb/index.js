import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classes from './crumb.module.scss';


function Breadcrumb({ subTitle, title }) {
    return (
        <div className="page_banner__bg">
            <Container>
                <div className={classes.pagecontent}>
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className={classes.pagetitle}>{title}</h1>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
};

export default Breadcrumb;
