import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import Button from '@mui/material-next/Button';

export default function SearchInput(): JSX.Element {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
      <OutlinedInput
        // value={input}
        // onChange={changeHandler}
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">ф</InputAdornment>}
        label="Search"
      />
    </FormControl>
  );
}
