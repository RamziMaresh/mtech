import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function HomePage({
    heroItems,
    projects,
    projectSectionItems,
    services,
    serviceSectionItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Hero heroItems={heroItems} />
            <AboutOne/>
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            
            {/** 
            <Team teamItems={teamItems} teamSectionItems={teamSectionItems} />

            <LatestBlog blogs={blogs} blogSectionItems={blogSectionItems} />
            */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const footerItems = getAllItems('footer');

    return {
        props: {
            heroItems,
            projectSectionItems,
            projects: LatestProject,
            services: HomePageServices,
            serviceSectionItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
