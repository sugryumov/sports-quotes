import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSelect from '@material-ui/core/Select';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';

interface Props {
  setLimitCount(value: number): void;
}

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          borderBottom: '1px solid #777',
        },
        '&::after': {
          borderBottom: '2px solid #e05927',
        },
      },
    },
    MuiSelect: {
      select: {
        padding: '10px',
      },
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: '#111',
        },
      },
    },
  },
});

function Select(props: Props): ReactElement {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    props.setLimitCount(event.target.value);
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel id="select-label">Показывать по</InputLabel>
        <SimpleSelect labelId="select-label" id="simple-select" value={age} onChange={handleChange}>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </SimpleSelect>
      </FormControl>
    </ThemeProvider>
  );
}

export default Select;
