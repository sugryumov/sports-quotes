import ButtonMaterial from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import './Button.css';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        width: '100%',
        color: '#E05927',
      },
    },
  },
});

interface Props {
  func(): void;
  isDisabled: boolean;
}

function Button(props: Props): ReactElement {
  return (
    <div className="button">
      <ThemeProvider theme={theme}>
        <ButtonMaterial onClick={() => props.func()} disabled={props.isDisabled}>
          Применить
        </ButtonMaterial>
      </ThemeProvider>
    </div>
  );
}

export default Button;
