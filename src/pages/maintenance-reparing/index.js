import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import { Container, Row } from 'react-bootstrap';
import RichText from '../../components/rich-text';
import { useTable } from "react-table";
import fakeData from "./Service_DATA.json";

//



function MaintenancePage({ footerItems, richTexts, }) {

    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "N",
                accessor: "id",
            },
            {
                Header: "Category",
                accessor: "category",
            },
            {
                Header: "Qualification",
                accessor: "qualification",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });


    return (
        <>
            <Head>
                <title>Services 01- MTech</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Services"
                title="Maintenance & Repairing"
            />

            <div className={classes.area}>
                <Container>
                    <Row >

                        <Col lg={{ span: 9 }} className="pe-lg-20">

                            {/** 
                        <div className="banner">
                            <img
                                className="img-full"
                                src={imagePath}
                                alt='Maintenance-Repairing'
                            />
                        </div>
                        */}
                            <div className={classes.content}>
                                <h2 className={classes.title}>Maintenance & Repairing</h2>
                                <h3 className={classes.subtitle}>Pressure Hydro - Test</h3>
                                <p className={classes.desc}>It is a high strength, field-applied composite system that is used forstructural reinforcement of damaged piping.
                                    It is a wet layup, fiber-reinforced polymer (FRP) system that consists of custom blended
                                    epoxyand unique fiber reinforcements tailored for piping repair.
                                </p>
                                <p className={classes.desc}>These products are suitablefor pipes with leaks or whichmay develop leaks. A broadline of unique epoxy
                                    matrixsystems and fabrics are available to handle a wide variety high heat applications, harsh chemicalenvironments, and coolinstallation temperatures.</p>
                            </div>

                            <div className={classes.content}>
                                <h3 className={classes.subtitle}>VALVES OVERHAULING & REPAIR</h3>
                                <p className={classes.desc}>We are doing servicing of manytypes of Industrial Valves. withwell-equipped team andoutstanding expert work force,
                                    the unit provides both onsite andoffsite servicing activities whetherthe requirement is for one valve orfor a complete plant.</p>
                            </div>

                            <div className={classes.content}>
                                <h3 className={classes.subtitle}>Pressure Safety Valve – TREVI Test</h3>
                                <p className={classes.desc}>Online testing of steam relief safety valves. Aload cell is mounted with electronic DC motorpuller on the valves stem top.
                                    This pulls thestem thereby trying to lift the disc. The netresult is that the valve pops at a pressure setpressure less electronic pressure calculated onthe basis of disc area.</p>
                            </div>

                            <div className={classes.content}>
                                <h3 className={classes.subtitle}>Pressure Hydro - Test</h3>
                                <p className={classes.desc}>Fully pressure testing unit is designed toconduct the pressure test ON SITE & in house aswell. Suitable to test different types of hoses,pipes, cylinders, Etc.
                                    The system generates anautomatic test report and certificate indicatingthe parameters of the test.</p>
                            </div>

                            <div className={classes.content}>
                                <h3 className={classes.subtitle}>Technical Support & Manpower Supply</h3>
                                <p className={classes.desc}>We have supplied professional and experiencedengineers, skilled and semi-skilled techniciansand workers
                                    to companies and contractorsworldwide in the oil and gas and petrochemicalindustries especially from all line of our services.</p>
                            </div>

                            <RichText richTexts={richTexts} />

                            <div className={classes.content}>
                                <h3 className={classes.subtitletwo}>Manpower Categories</h3>
                                <p className={classes.desc}>M-TECH is a reliable manpower source, where we cansupport our clients’ business in Saudi Arabia. M-TECH has an excellent history of supporting manyinternational,
                                    and local companies with qualified andskilled manpower whom able to achieve clients’exceptions.</p>
                                <br />
                                <p className={classes.descTwo}>Below are samples of categories that M-TECH supplyingand supporting its clients with:</p>
                                <br />
                                <br />
                            </div>

                            <table {...getTableProps()} className={classes.table}>
                                <thead>
                                    {headerGroups.map((headerGroup) => (
                                        <tr className={classes.tr}{...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th className={classes.th} {...column.getHeaderProps()}>
                                                    {column.render("Header")}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <tr className={classes.tr} {...row.getRowProps()}>
                                                {row.cells.map((cell) => (
                                                    <td className={classes.td} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>



                        </Col>
                    </Row>

                </Container>
            </div>
            {/**

            <OurServices ourServices={ourServices} />

                         */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const footerItems = getAllItems('footer');
    const richTexts = getAllItems('rich-text');

    return {
        props: {
            footerItems,
            richTexts,
        },
    };
}

MaintenancePage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default MaintenancePage;
