import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { ReactElement, useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { deleteDataToLocalStorage } from '../../helpers';
import PanelContent from './PanelContent/PanelContent';
import SideList from './SideList/SideList';
import { getCategories, getQuotes } from '../../helpers/services';

const useStyles = makeStyles(theme => ({
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

function AdminPanel(): ReactElement {
  const classes = useStyles();

  const [state, setState] = useState<boolean>(false);
  const [contentLabel, setContentLabel] = useState<string>('');
  const [contentData, setContentData] = useState<any>([]);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const changeContentData = (value: string) => {
    switch (value) {
      case 'Категории':
        getCategories()
          .then((res: any) => {
            setContentData(res.data);
          })
          .catch((err: any) => console.log(err));
        break;
      case 'Статьи':
        getQuotes()
          .then((res: any) => {
            setContentData(res.data.quotes);
          })
          .catch((err: any) => console.log(err));
        break;
    }
    setContentLabel(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Админка
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={deleteDataToLocalStorage}
          >
            <MeetingRoomIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={state} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <SideList toggleDrawer={toggleDrawer} changeContentData={changeContentData} />
      </SwipeableDrawer>
      <PanelContent
        contentLabel={contentLabel}
        contentData={contentData}
        setContentData={setContentData}
      />
    </div>
  );
}

export default AdminPanel;
