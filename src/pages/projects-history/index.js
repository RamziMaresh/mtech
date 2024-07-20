import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import classes from './projects.module.scss';
import { Container, Row} from 'react-bootstrap';
import { useTable } from "react-table";
import serviceData from "./Projects_DATA.json";
import ProjectsHistoryTwo from '../../components/projects-history-two';

//



function ProjectsHistory({ footerItems }) {

    const data = React.useMemo(() => serviceData, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "N",
                accessor: "id",
            },
            {
                Header: "Project",
                accessor: "project",
            },
            {
                Header: "Client",
                accessor: "client",
            },
            {
                Header: "Po No.",
                accessor: "pono",
            },
            {
                Header: "Year",
                accessor: "year",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });


    return (
        <>
            <Head>
                <title>Projects History</title>
                <meta
                    name="description"
                    content="M-Tech - Founded in 2013, M-TECH provides wide range of services that includes engineering, procurement and execution to the oil & gas, petrochemicals & industrial cities."
                />
            </Head>
            <Breadcrumb
                subTitle="Projects"
                title="Projects History"
            />

            <div className={classes.area}>
                <Container>
                    <Row className="">

                        <div className={classes.content}>
                            <h3 className={classes.subtitletwo}>CIVIL & CONSTRUCTION</h3>
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
                    </Row>

                </Container>
                <ProjectsHistoryTwo />

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
    return {
        props: {
            footerItems,
        },
    };
}

ProjectsHistory.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectsHistory;
