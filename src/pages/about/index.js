import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import Footer from '../../components/layout/footer';
import Team from '../../components/team';
import { getAllItems } from '../../lib/items-util';
import TeamTwo from '../../components/team/index-2';
import BrandTwo from '../../components/brand/index-2';

function AboutPage({
    bannerThreeItems,
    footerItems,
    brandItems,
    teamItemsTwo,

}) {
    return (
        <>
            <Head>
                <title>About - MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="What we do"
                title="About us"
            />
            <AboutOne />
            <BannerThree bannerThreeItems={bannerThreeItems} />

            <Team />
            <BrandTwo brandItems={brandItems} />

            <TeamTwo teamItemsTwo={teamItemsTwo} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const brandItems = getAllItems('brand');
    const teamItemsTwo = getAllItems('team-02');
    const bannerThreeItems = getAllItems('banner-3');

    const footerItems = getAllItems('footer');

    return {
        props: {
            bannerThreeItems,
            footerItems,
            brandItems,
            teamItemsTwo,
        },
    };
}

AboutPage.propTypes = {
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,

};

export default AboutPage;
