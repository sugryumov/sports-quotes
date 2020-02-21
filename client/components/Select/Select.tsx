import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSelect from '@material-ui/core/Select';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';

interface Props {
  func(value: string | number): void;
  value: string;
  data: any;
  type: string;
  title: string;
}

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
        marginTop: '10px',
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
  const handleChange = (event: any) => {
    props.func(event.target.value);
  };

  const renderSelectList = (type: string) => {
    switch (type) {
      case 'category':
        return (
          <SimpleSelect
            labelId="select-category"
            id="category"
            value={props.value}
            onChange={handleChange}
          >
            <MenuItem value="Все">Все</MenuItem>
            {props.data.map((item: any) => {
              return (
                <MenuItem value={item.name} key={item._id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </SimpleSelect>
        );
      default:
        return (
          <SimpleSelect
            labelId="select-limit"
            id="limit"
            value={props.value}
            onChange={handleChange}
          >
            {props.data.map((item: any) => {
              return (
                <MenuItem value={item.name} key={item._id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </SimpleSelect>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel id="select-label">{props.title}</InputLabel>
        {renderSelectList(props.type)}
      </FormControl>
    </ThemeProvider>
  );
}

export default Select;
