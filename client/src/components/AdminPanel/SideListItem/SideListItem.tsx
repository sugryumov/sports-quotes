import React, { ReactElement } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryIcon from '@material-ui/icons/Category';
import DescriptionIcon from '@material-ui/icons/Description';
import FiberNewIcon from '@material-ui/icons/FiberNew';

interface Props {
  text: string;
  changeContentData(value: string): any;
}

function SideListItem(props: Props): ReactElement {
  const renderItem = (text: string) => {
    switch (text) {
      case 'Категории':
        return <CategoryIcon />;
      case 'Статьи':
        return <DescriptionIcon />;
      default:
        return <FiberNewIcon />;
    }
  };

  return (
    <ListItem button onClick={() => props.changeContentData(props.text)}>
      <ListItemIcon>{renderItem(props.text)}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}

export default SideListItem;
