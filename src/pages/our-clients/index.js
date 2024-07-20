import Head from 'next/head';
import PropTypes from 'prop-types';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';

function OurClients({
    brandItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Our Clients - MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Our Clients"
                title="Our Clients"
            />
            <BrandTwo brandItems={brandItems} />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const brandItems = getAllItems('brand');
    const footerItems = getAllItems('footer');

    return {
        props: {
            brandItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
