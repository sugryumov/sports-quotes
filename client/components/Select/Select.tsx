import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSelect from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import './Select.scss';

interface Props {
  setLimitCount(value: number): void;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Select(props: Props): ReactElement {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    props.setLimitCount(event.target.value);
    setAge(event.target.value);
  };
  return (
    <FormControl
      classes={{
        root: classes.root,
      }}
    >
      <InputLabel id="select-label">Показывать по</InputLabel>
      <SimpleSelect labelId="select-label" id="simple-select" value={age} onChange={handleChange}>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </SimpleSelect>
    </FormControl>
  );
}

export default Select;
