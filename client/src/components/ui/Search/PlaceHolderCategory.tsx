import * as React from 'react';
import type { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { useAppDispatch } from '../../../redux/hooks';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type PlaceHolderCategoryProps = {
  categories: string[];
};

// const names = ['Мясо', 'Рыба', 'Морепродукты', 'Яйца', 'и т.д.'];

export default function PlaceHolderCategory({ categories }: PlaceHolderCategoryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [categoryName, setCategoryName] = React.useState<string[]>(categories);

  const handleChange = (event: SelectChangeEvent<typeof categoryName>): void => {
    const {
      target: { value },
    } = event;
    // console.log(value);
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // вот тут вызов sagi  на фильтр
    const input = value.toString();
    dispatch({ type: 'FILTER_REQUESTS_ON_CATEGORIES_PRODUCTS', payload: input });
  };

  React.useEffect(() => {
    setCategoryName([]);
  }, []);
  return (
    <div>
      <FormControl sx={{ width: 300, mt: 2 }}>
        <Select
          style={{ background: '#fafafa', opacity: 0.7, marginLeft: '0px' }}
          multiple
          displayEmpty
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em style={{ fontFamily: 'revert-layer' }}>Категория продукта...</em>;
            }
            // console.log('SELECTED:', selected);
            // console.log('categories:', categories);
            if (selected[0] !== categories[0] && categories.length === 1) {
              return categories.join(', ');
            }
            // if (
            //   categories.length !== selected.length &&
            //   categories.length !== 1 &&
            //   selected.length !== 1
            // ) {
            //   selected = [];
            // }
            // selected.length !== categories.length ||
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" style={{ color: '#fafafa' }}>
            <em>Категория продукта...</em>
          </MenuItem>
          {categories.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

// style={getStyles(name, categoryName, theme)}

// function getStyles(name: string, categoryName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       categoryName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
