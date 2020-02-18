import React, { ReactElement } from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import './Button.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: '#E05927',
  },
});

interface Props {
  func(): void;
  isDisabled: boolean;
}

function Button(props: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className="button">
      <ButtonMaterial
        className={classes.root}
        onClick={() => props.func()}
        disabled={props.isDisabled}
      >
        Применить
      </ButtonMaterial>
    </div>
  );
}

export default Button;
