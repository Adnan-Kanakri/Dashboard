import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Pending from '@mui/icons-material/Pending';
import classes from "./Table.module.css";

export default function CustomizedTables(props) {
    const cellGroup = {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "11.6667px",
        lineHeight: "19px",
        color: "#808191",
        padding: "10px",
        margin: "0px 0px 50px 0px",
        borderBottom: "0"
    }

    const emailCell = {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "11.6667px",
        lineHeight: "19px",
        color: "#1B1D21",
        padding: "10px",
        borderBottom: "0"
        // padding: 0px;
        // margin: 0px;
    }

    return (
        <TableContainer >
            <Table sx={{ minWidth: 700 }}>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.id} style={{
                            padding: "30px",

                        }}>
                            <TableCell style={{
                                borderBottom: "0"
                            }} component="th" scope="row">
                                <input type="checkbox" style={{ visibility: "hidden" }} />
                            </TableCell>
                            <TableCell style={{
                                borderBottom: 0,
                                padding: "17px 0px",
                            }} align="right">
                                <Avatar
                                    style={{
                                        borderRadius: '15.56px',
                                    }}
                                    sx={{ bgcolor: deepOrange[500] }}
                                    variant="square"
                                    src={row.avatar}>
                                </Avatar>
                            </TableCell>
                            <TableCell style={emailCell} align="left">{row.email}</TableCell>
                            <TableCell style={cellGroup} align="center">{row.first_name}</TableCell>
                            <TableCell style={cellGroup} align="center">{row.last_name}</TableCell>
                            <TableCell style={cellGroup} align="center">{new Date().toLocaleDateString()}</TableCell>
                            <TableCell style={cellGroup} align="center" >{<Pending
                                style={{
                                    color: "#FFDF85",
                                    // margin:"-25px 5px 0px 50px"
                                    padding: "0px 5px 0px 0px",
                                    margin: "0px 5px -6px -10px",
                                    borderBottom: "0"
                                }}
                            />}<span style={{
                                color: "#1B1D21",
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "12px",   
                                lineHeight: "20px",
                            }}>Pending</span> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
