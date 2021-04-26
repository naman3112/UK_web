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
    
  }
}))(TableRow);

function createData(event, date) {
  return { event,date };
}

const rows = [
  createData("Paper Submission Deadline", "31st July 2021"),
  createData("Acceptance Notification Due", "31st August 2021"),
  createData("Registration Due", "30th September 2021"),
  createData("Camera Ready Submission", "15th October 2021"),
  createData("Conference Dates", "19th November 2021"),
 
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
            <StyledTableCell align="center">
             Important
            </StyledTableCell>
            <StyledTableCell align="left">
              Dates
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  align="left"component="th" scope="row">
                {row.event}
              </StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
