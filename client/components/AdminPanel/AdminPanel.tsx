import React, { ReactElement, useContext } from 'react';
import { StoreContext } from '../../context/admin';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function AdminPanel(): ReactElement {
  const context = useContext(StoreContext);

  // useEffect(() => {
  //   if (getTokenFromLocalStorage('tokenSmarthub')) {
  //     checkToken(getTokenFromLocalStorage('expiresInSmarthub'), password);
  //   } else {
  //     history.push('/auth');
  //   }
  // }, [history, password]);

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Категории', 'Статьи'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Открыть панель</Button>
      <SwipeableDrawer open={state.left} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {sideList()}
      </SwipeableDrawer>
    </div>
  );

  // return <div className="panel">admin</div>;
}

export default AdminPanel;
