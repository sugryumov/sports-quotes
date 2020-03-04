import React, { ReactElement } from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import SideListItem from '../SideListItem/SideListItem';

interface Props {
  toggleDrawer(value: any): any;
  changeContentData(value: string): void;
}

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

function SideList(props: Props): ReactElement {
  const classes = useStyles();

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        <SideListItem text={'Категории'} changeContentData={props.changeContentData} />
        <SideListItem text={'Статьи'} changeContentData={props.changeContentData} />
        <SideListItem text={'Предложенные'} changeContentData={props.changeContentData} />
      </List>
    </div>
  );
}

export default SideList;
