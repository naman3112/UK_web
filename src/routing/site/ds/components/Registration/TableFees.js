import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#242122",

    color: theme.palette.common.white,
    fontSize: 20,
    letterSpacing: "1px",

    fontFamily: "Montserrat,sans-serif",
    ["@media (max-width:479px)"]: {
      fontSize: 13,
      letterSpacing: "0px",
      padding: "1px",
      textAlign: "center",
    },
  },
  body: {
    fontSize: 18,
    letterSpacing: "1px",
    fontFamily: "Montserrat,sans-serif",
    ["@media (max-width:479px)"]: {
      fontSize: 12,
      letterSpacing: "1px",
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
  
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Standard Authors", "GBP £450", "GBP £600"),
  createData("Research Student Author", "GBP £400", "GBP £550"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">
              EARLY BIRD (Before 31st August 2021)
            </StyledTableCell>
            <StyledTableCell align="left">REGULAR </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="leftt">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
