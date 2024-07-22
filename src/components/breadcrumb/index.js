import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ subTitle, title }) {
    return (
        <div className="page_banner__bg">
            <Container>
                <div className="page_content">
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className="page_title">{title}</h1>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Breadcrumb;
