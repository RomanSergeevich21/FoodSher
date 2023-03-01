import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider, createTheme } from '@mui/system';
import type {
  BackendRequestWithUserType,
  ProductType,
} from '../../../redux/singleRequestSlice/singleRequestsType';



type TablePropsType = {
  request: BackendRequestWithUserType;
};

function Row(props: { prod: ProductType }): JSX.Element {
  const { prod } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: 20, color: 'black'}} component="th" scope="row">
          {prod.title}
        </TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: 20, color: 'black'}} align="right">{prod.price}</TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: 20, color: 'black'}} align="right">{prod.count}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20, color: 'black'}} variant="h6" gutterBottom component="div">
                Описание
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19, color: 'black'}} >{prod.description}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// sx={{ fontWeight: 'bold', fontSize: 28, color: 'black'}}

export default function ProdTable({ request }: TablePropsType): JSX.Element {
  return (
    <TableContainer sx={{ bgcolor: '#DCDCDC', opacity: 0.68 }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold', fontSize: 28, color: 'black'}} >Название продукта</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 28, color: 'black'}} align="right">Цена</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 28, color: 'black'}} align="right">Количество&nbsp;(у.е.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {request.Products.map((prod) => (
            <Row key={prod.id} prod={prod} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
