import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Paper Submission Starts', 'February 25, 2025'),
  createData('First Round - Paper Submission Deadline', 'April 25, 2025'),
  createData('Notification of Paper Acceptance (First Round)', 'June 15, 2025'),
  createData('Second Round - Paper Submission Deadline', 'August 10, 2025'),
  createData('Notification of Paper Acceptance (Second Round)', 'October 10, 2025'),
  createData('Camera Ready Submission Deadline', 'October 31, 2025'),
  createData('Academia and Industry Workshops', 'December 10, 2025'),
  createData('Main Conference Dates', 'December 11-13, 2025')
];

export default function BasicTable() {
  return (<div className="flex justify-center items-center">

    <TableContainer component={Paper} className='max-w-4/6'>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Phase</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
  );
}
