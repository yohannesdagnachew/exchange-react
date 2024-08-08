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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

function createData(bank, buying, selling, currency) {
  return { bank, buying, selling, currency };
}

export default function CustomizedTables({ dropdownValue }) {
  const rows = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://exchange.football-live-tv.com/exchange/comparison?currency=${dropdownValue}`
      );
      setData(response.data.sorted);
    };

    fetchData();
  }, [dropdownValue]);

  data.map((item, index) => {
    if (item.price.buying === null) {
      return;
    }

    rows.push(
      createData(
        item.bankName,
        item.price.buying,
        item.price.selling,
        index + 1
      )
    );
  });

  return (
    <Table
      sx={{
        minWidth: 10,
        maxWidth: 1000,
        margin: "auto",
        border: "2px solid black",
      }}
      aria-label="customized table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell>Bank</StyledTableCell>
          <StyledTableCell align="center">Buying</StyledTableCell>
          <StyledTableCell align="center">Selling</StyledTableCell>
          <StyledTableCell align="center">Rank</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.bank}
            </StyledTableCell>
            <StyledTableCell align="center">{row.buying}</StyledTableCell>
            <StyledTableCell align="center">{row.selling}</StyledTableCell>
            <StyledTableCell align="center">{row.currency}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}
