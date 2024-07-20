import React from 'react';
import classes from './index.module.scss';
import { Container, Row } from 'react-bootstrap';
import { useTable } from "react-table";
import serviceData from "./project_two_DATA.json";

//



function ProjectsHistoryTwo() {

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
            <div className={classes.area}>
                <Container>
                    <Row className="">

                        <div className={classes.content}>
                            <h3 className={classes.subtitletwo}>MECH & REPAIRING</h3>
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
            </div>
        </>
    );
}
export default ProjectsHistoryTwo;
