import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamTwo from '../../components/team/index-2';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';

function OurClients({ teamItemsTwo, footerItems }) {
    return (
        <>
            <Head>
                <title>Certificates- MTech</title>
                <meta
                    name="description"
                    content="MTech - Construction "
                />
            </Head>
            <Breadcrumb
                subTitle="Awards"
                title="Certificates"
            />
            <TeamTwo teamItemsTwo={teamItemsTwo} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const teamItemsTwo = getAllItems('team-02');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItemsTwo,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
