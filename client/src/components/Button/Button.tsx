import ButtonMaterial from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import './Button.css';

interface Props {
  func(): void;
  text: string;
  type: string;
  isDisabled?: boolean;
}

function Button(props: Props): ReactElement {
  const defaultStyle = {
    width: 'auto',
    color: '#E05927',
    backgroundColor: '#fff',
    transition: 'all 0.35s ease',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#E05927',
    },
  };
  const secondaryStyle = {
    width: 'auto',
    color: '#fff',
    backgroundColor: '#E05927',
    '&:hover': {
      backgroundColor: '#b75531',
    },
    '&:active': {
      backgroundColor: '#b75531',
    },
  };

  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: props.type === 'primary' ? defaultStyle : secondaryStyle,
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
