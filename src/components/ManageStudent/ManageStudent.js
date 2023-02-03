import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



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

export default function BasicTable() {
    return (
        <Box width={'100%'} marginTop={"15px"}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1040 }} aria-label="simple table">
                    <TableHead>
                        <TableRow
                        sx={{
                            backgroundColor:'red',
                         
                        }}>
                            <TableCell
                             sx={{color:'white', fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell
                             sx={{color:'white', fontWeight: 'bold'}} align="right">Calories</TableCell>
                            <TableCell
                             sx={{color:'white', fontWeight: 'bold'}} align="right">Class</TableCell>
                            <TableCell
                             sx={{color:'white', fontWeight: 'bold'}} align="right">Roll No</TableCell>
                            <TableCell 
                            sx={{color:'white', fontWeight: 'bold'}} align="right">View, edit , delete</TableCell>
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
                                <TableCell align="right">{row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}
                                </TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}