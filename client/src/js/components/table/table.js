import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles({
    head: {
        backgroundColor: 'black',
        color: 'white',
    },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'lightgray',
        },
    },
})(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles ={
    root: {
        width: '100%',
        marginTop: 24,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

 class TableClass extends React.Component {
        constructor(props) {
            super(props);
        }

   render(){
       const {classes,data,result} = this.props;
console.log(data,"lk")
       return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Input Numerical  Value</StyledTableCell>
                        <StyledTableCell>Input Unit of Measure</StyledTableCell>
                        <StyledTableCell>Target Unit of Measure</StyledTableCell>
                        <StyledTableCell>Student Response</StyledTableCell>
                        <StyledTableCell>RESULT</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {data.inputValue}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {data.inputUnit}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {data.targetUnit}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {data.studentResponse}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {result}
                            </StyledTableCell>
                        </StyledTableRow>

                </TableBody>
            </Table>
        </Paper>
    );
}}

export default withStyles(useStyles)(TableClass)
