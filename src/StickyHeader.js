import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Well Name', minWidth: 100 },
  { id: 'accuracy', label: 'Accuracy', minWidth: 40,align: 'right',format: (value) => value.toFixed(2), },
  {
    id: 'precision',
    label: 'Precision',
    minWidth: 40,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'recall',
    label: 'Recall',
    minWidth: 40,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'f1score',
    label: 'F1-score',
    minWidth: 40,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, accuracy, precision, recall, f1score) {
  const density = accuracy / 10;
  return { name, accuracy, precision, recall, f1score };
}

const rows = [
  createData('Well-1', 90.8967, 90.8967, 90.8965,90.8965),
  createData('Well-2', 90.899, 70.899, 80.899,90.8965),
  createData('Well-3', 70.899, 60.48397, 30.1340,90.8965),
  createData('Well-4', 98.3352, 32.716743, 98.3352,98.3352),
  createData('Well-5', 98.3352, 37.602103, 99.84670,98.3352),
  createData('Well-6', 37.602103, 25.475400, 76.92024,37.602103),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
