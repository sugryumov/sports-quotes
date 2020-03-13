import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './InputField.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

interface Props {
  label: any;
  value: any;
  func: any;
  regExp: RegExp;
  textError: any;
}

function InputField(props: Props): ReactElement {
  const [statusError, setStatusError] = useState<Boolean>(false);

  const theme = createMuiTheme({
    overrides: {
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
      MuiInputLabel: {
        root: {
          '&$focused': {
            color: '#877f7f',
          },
        },
      },
      MuiFormControl: {
        root: {
          marginBottom: '20px',
          display: 'flex',
        },
      },
    },
  });

  const changeHandler = (e: any, value: boolean) => {
    setStatusError(value);
    props.func(e, !value, props.label);
  };

  const validate = (reg: any, e: any) => {
    return reg.test(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="input-field">
        <p className="input-field__error">{statusError ? props.textError : ''}</p>
        <TextField
          label={props.label}
          value={props.value}
          onChange={(event: any) =>
            validate(props.regExp, event) ? changeHandler(event, false) : changeHandler(event, true)
          }
        />
      </div>
    </ThemeProvider>
  );
}

export default InputField;
