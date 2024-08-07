import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({dropdownValue, setDropdownValue }) {
//   const [dropdownValue, setDropdownValue] = React.useState('');

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdownValue}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
          <MenuItem value={'GBP'}>GBP</MenuItem>
          <MenuItem value={'ADE'}>ADE</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}