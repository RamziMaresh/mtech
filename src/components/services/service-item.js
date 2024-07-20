import PropTypes from 'prop-types';
import classes from './service.module.scss';




//  For the services in home page




function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.mediumImage}`;


    return (
        <div className="service-item">
            <a href={service.linkPath} className={classes.img}>
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </a>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <a href={service.linkPath}>{service?.title}</a>
                </h2>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
