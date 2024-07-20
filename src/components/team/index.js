import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classes from './team.module.scss';

function Team({ teamSectionItems }) {
    return (
        <div className={classes.area}>
            {teamSectionItems?.map((items) => {
                    <Container key={items.id}>
                        <div className={classes.section}>
                            <div className={classes.section__wrap}>
                                <div className={classes.section__title}>
                                    <h2>{items?.title}</h2>
                                </div>
                                <p
                                    className={classes.section__desc}
                                    dangerouslySetInnerHTML={{
                                        __html: items.desc,
                                    }}
                                />
                            </div>
                        </div>
                    </Container>
            })}
        </div>
    );
}

Team.propTypes = {
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default Team;
