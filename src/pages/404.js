import Head from 'next/head';
import PropTypes from 'prop-types';
import Error404 from '../components/error-404';
import Breadcrumb from '../components/breadcrumb';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';

function Error404Page({ footerItems }) {
    return (
        <>
            <Head>
                <title>Error 404 - MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Not Found"
                title="404"
            />
            <Error404 />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const footerItems = getAllItems('footer');

    return {
        props: {
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Error404Page;
