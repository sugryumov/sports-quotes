import React, { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import ListQuotes from '../ListQuotes/ListQuotes';

// interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function PaginationControlled(props: any): ReactElement {
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const handleChange = (_event: any, value: any) => {
    setPage(value);
    if (props.startPage === 0) {
      props.updatePages(value, props.limitPages);
    } else {
      props.updatePages(value + props.limitPages, props.limitPages);
    }
  };

  return (
    <div className={classes.root}>
      <ListQuotes items={props.items} />
      <Pagination count={5} page={page} onChange={handleChange} />
    </div>
  );
}

export default PaginationControlled;
