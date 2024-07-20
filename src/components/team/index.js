import { Container } from 'react-bootstrap';
import classes from './team.module.scss';

function Team() {
    return (
        <div className={classes.area}>
            <Container>
                <div className={classes.section}>
                    <div className={classes.section__wrap}>
                        <div className={classes.section__title}>
                            <h2>Clients</h2>
                        </div>
                        <p
                            className={classes.section__desc}
                        >
                            Construction of itself, because it is pain, but <br /> because some proper style design occur in toil and pain pleasure we have expert team
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}


export default Team;
