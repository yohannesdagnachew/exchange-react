import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, buying, selling, currency) {
  return { name, buying, selling, currency };
}



export default function CustomizedTables({bank}) {
  const rows = [];
  
 
    const name = bank.name;
    const data = bank.xChange
    

     data.map((item, index) => {
   
        if (item.buying === null || item.buying === 0 ){
            return;
        }
    rows.push(
      createData(
        name,
        item.buying,
        item.selling,
        item.currency,
      ));
     });



  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth:10 }} aria-label="customized table">
        <TableHead>
            <TableRow colSpan={3}>
              <TableCell colSpan={3} align="center" size="small">
              <h2
             style={{
                fontSize: "28px",
                color: "black",
             }}
            >{name}</h2>
              </TableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell align="left">Buying</StyledTableCell>
                <StyledTableCell align="left">Selling</StyledTableCell>
                <StyledTableCell align="left">Currency</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.buying}</StyledTableCell>
              <StyledTableCell align="left">{row.selling}</StyledTableCell>
              <StyledTableCell align="left">{row.currency}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
