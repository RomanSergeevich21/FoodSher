import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type CheckBoxesProps = {
  partners: string[];
};

export default function CheckBoxes({ partners }: CheckBoxesProps): JSX.Element {
  return (
    <FormGroup>
      {partners.map((partner) => (
        <FormControlLabel
          style={{ background: '#fafafa', opacity: 0.7, marginLeft: '3px' }}
          key={partner}
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label={partner}
        />
      ))}
    </FormGroup>
  );
}

// defaultChecked
