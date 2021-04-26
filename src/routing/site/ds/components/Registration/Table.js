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
    backgroundColor: "#1c449c",
    color: theme.palette.common.white,
    fontSize: 20,
    letterSpacing: "2px",
    fontFamily: "Montserrat,sans-serif",
    ['@media (max-width:479px)']:{
      fontSize: 14,
      letterSpacing: "1px"
    }
 
  },
  body: {
    fontSize: 18,
    letterSpacing: "2px",
    fontFamily: "Montserrat,sans-serif",
    ['@media (max-width:479px)']:{
      fontSize: 12,
      letterSpacing: "1px"
    }
  



  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("ACCOUNT NAME", "UNIVERSAL INOVATORS"),
  createData("ACCOUNT NUMBER", 510909010118890),
  createData("BANK", "City Union Bank"),
  createData("BRANCH", "Sector-8, Rohini, Delhi"),
  createData("Branch CODE", 244),
  createData("IFSC CODE", "CIUB0000244"),
  createData("MICR", 600054027),
  createData("SWIFT CODE", "CIUBIN5M"),
  createData("MICR", 600054027),
  createData("SWIFT CODE", "CIUBIN5M"),
  createData("ACCOUNT TYPE", "CURRENT")
];

const useStyles = makeStyles({
  table: {
    minWidth: 200
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">
              Registration Account Details
            </StyledTableCell>
            <StyledTableCell align="left">
              (Pay via Bank Transfer)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  align="left"component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
