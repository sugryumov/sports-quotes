import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import {
  createMuiTheme,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement, useContext, useState } from 'react';
import Button from '../../components/Button/Button';
import { StoreContext } from '../../context';
import './ModalWindow.css';

interface IPropsModal {}

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

function ModalWindow(props: IPropsModal): ReactElement {
  const context = useContext(StoreContext);

  const [authorNameValue, setAuthorNameValue] = useState<String>('');
  const [categoryNameValue, setCategoryNameValue] = useState<String>('');
  const [textValue, setTextValue] = useState<String>('');

  const matches = useMediaQuery('(max-width:600px)');

  const handleClose = () => {
    setCategoryNameValue('');
    setAuthorNameValue('');
    setTextValue('');
    context.setOpenModal(false);
  };

  const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          '&::before': {
            borderBottom: '1px solid #777',
          },
          '&::after': {
            borderBottom: '2px solid #e05927',
          },
        },
      },
      MuiFormControl: {
        root: {
          marginBottom: '20px',
        },
      },
      MuiInputLabel: {
        root: {
          '&$focused': {
            color: '#877f7f',
          },
        },
      },
      MuiPaper: {
        root: {
          width: matches ? '100%' : '500px',
        },
      },
      MuiIconButton: {
        root: {
          padding: '3px',
        },
      },
      MuiTypography: {
        root: {
          margin: 0,
        },
      },
    },
  });

  return (
    <div className="modal">
      <ThemeProvider theme={theme}>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={context.openModal}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Ваша цитата
          </DialogTitle>
          <DialogContent dividers>
            <form noValidate autoComplete="off" className="modal__form">
              <TextField
                label="Категория"
                value={categoryNameValue}
                onChange={e => setCategoryNameValue(e.target.value)}
              />
              <TextField
                label="Автор"
                value={authorNameValue}
                onChange={e => setAuthorNameValue(e.target.value)}
              />
              <TextField
                label="Текст цитаты"
                rows={2}
                rowsMax={4}
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions disableSpacing={false}>
            <Button func={handleClose} text={'Отправить'} type={'secondary'} />
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default ModalWindow;
