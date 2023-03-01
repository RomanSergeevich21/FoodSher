import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { check } from 'prettier';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

type CheckBoxesProps = {
  partners: string[];
};

type Partner = {
  [index: string]: boolean;
};

export default function CheckboxesGroup({ partners }: CheckBoxesProps): JSX.Element {
  const [state, setState] = React.useState({});
  // const [checkedPartners, setCheckedPartners] = React.useState([]);
  const dispatch = useAppDispatch();
  const requests = useAppSelector((store) => store.searchRequests.searchRequests);

  const initialPartners = (): void => {
    const obj: Partner = {};
    partners.forEach((partner) => {
      obj[partner] = false;
    });
    setState(obj);
  };

  React.useEffect(() => {
    initialPartners();
  }, [partners]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    const arr = (Object.keys(state) as (keyof typeof state)[]).filter((key, index) => state[key]);

    const checkedArr = event.target.checked
      ? [...arr, event.target.name]
      : arr.filter((el) => el !== event.target.name);

    const ids = requests.map((el) => el.id);

    dispatch({
      type: 'SEARCH_REQUESTS_ON_PARTNER',
      payload: `${ids.toString()}|${checkedArr.toString()}`,
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          {(Object.keys(state) as (keyof typeof state)[]).map((key, index) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                  checked={state[key]}
                  onChange={handleChange}
                  name={key}
                />
              }
              label={key}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
