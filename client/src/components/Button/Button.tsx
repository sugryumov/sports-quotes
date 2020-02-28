import ButtonMaterial from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import './Button.css';

interface Props {
  func(): void;
  text: string;
  color: string;
  bg: string;
  isDisabled?: boolean;
}

function Button(props: Props): ReactElement {
  const rootStyles = {
    width: 'auto',
    color: props.color,
    backgroundColor: props.bg,
  };

  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: rootStyles,
      },
    },
  });

  return (
    <div className="button">
      <ThemeProvider theme={theme}>
        <ButtonMaterial onClick={() => props.func()} disabled={props.isDisabled}>
          {props.text}
        </ButtonMaterial>
      </ThemeProvider>
    </div>
  );
}

export default Button;
