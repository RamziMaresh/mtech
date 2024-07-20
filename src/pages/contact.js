import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Contact us"
                title="Get in Touch"
            />
            <Contact contactItems={contactItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
