import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import Footer from '../../components/layout/footer';
import Team from '../../components/team';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';
import BrandOne from '../../components/brand';
import TeamTwo from '../../components/team/index-2';

function AboutPage({
    aboutItems,
    bannerThreeItems,
    teamItems,
    teamSectionItems,
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
            <AboutOne aboutItems={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <Team teamItems={teamItems} teamSectionItems={teamSectionItems} />


            <BrandOne brandItems={brandItems} />
            <TeamTwo teamItemsTwo={teamItemsTwo} />


            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');
    const brandItems = getAllItems('brand');
    const teamItemsTwo = getAllItems('team-02');

    const bannerThreeItems = getAllItems('banner-3');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const teamSectionItems = getAllItems('team-section');
    const teamItems = getAllItems('team');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            teamSectionItems,
            teamItems,
            footerItems,
            brandItems,
            teamItemsTwo,

        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,

};

export default AboutPage;
