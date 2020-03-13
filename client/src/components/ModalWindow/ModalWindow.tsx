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
import InputField from '../InputField/InputField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement, useContext, useState } from 'react';
import Button from '../../components/Button/Button';
import { StoreContext } from '../../context';
import './ModalWindow.css';
import { offerQuote } from '../../helpers/services';

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

  const [categoryNameValue, setCategoryNameValue] = useState<String>('');
  const [authorNameValue, setAuthorNameValue] = useState<String>('');
  const [textValue, setTextValue] = useState<String>('');
  const [statusDispatch, setStatusDispatch] = useState<Boolean>(false);
  const [errorList, setErrorList] = useState<Array<String>>(['Категория', 'Автор', 'Текст цитаты']);

  const matches = useMediaQuery('(max-width:600px)');

  const updateErrorList = (valid: boolean, fieldName: string) => {
    if (valid) {
      if (errorList.indexOf(fieldName) > -1) {
        setErrorList(errorList.filter((item: any) => item !== fieldName));
      }
    } else {
      if (errorList.indexOf(fieldName) === -1) {
        setErrorList((prevState: any) => prevState.concat(fieldName));
      }
    }
  };

  const handleClose = () => {
    setCategoryNameValue('');
    setAuthorNameValue('');
    setTextValue('');
    context.setOpenModal(false);
  };

  const createYourQuote = () => {
    offerQuote(categoryNameValue, authorNameValue, textValue)
      .then(() => {
        setStatusDispatch(true);
        setCategoryNameValue('');
        setAuthorNameValue('');
        setTextValue('');
        setTimeout(() => {
          context.setOpenModal(false);
          setStatusDispatch(false);
        }, 1500);
        setTimeout(() => {
          setStatusDispatch(false);
        }, 2000);
      })
      .catch((err: any) => console.log(err));
  };

  const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          width: matches ? '100%' : statusDispatch ? '200px' : '500px',
          height: statusDispatch ? '100px' : 'auto',
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
  console.log(errorList, 'errorList');

  return (
    <div className="modal">
      <ThemeProvider theme={theme}>
        {statusDispatch ? (
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={context.openModal}
          >
            <div className="modal__sended">Отправлено</div>
          </Dialog>
        ) : (
          <Dialog
            scroll="body"
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={context.openModal}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Ваша цитата
            </DialogTitle>
            <DialogContent dividers>
              <form noValidate autoComplete="off" className="modal__form">
                <InputField
                  label="Категория"
                  value={categoryNameValue}
                  func={(e: any, valid: any, fieldName: string) => {
                    updateErrorList(valid, fieldName);
                    setCategoryNameValue(e.target.value);
                  }}
                  regExp={/^[a-zA-ZА-яЁё0-9_., -]{3,}$/g}
                  textError="Минимум 3 буквы"
                />
                <InputField
                  label="Автор"
                  value={authorNameValue}
                  func={(e: any, valid: any, fieldName: string) => {
                    updateErrorList(valid, fieldName);
                    setAuthorNameValue(e.target.value);
                  }}
                  regExp={/^[a-zA-ZА-яЁё0-9_., -]{3,}$/g}
                  textError="Минимум 3 буквы"
                />
                <InputField
                  label="Текст цитаты"
                  value={textValue}
                  func={(e: any, valid: any, fieldName: string) => {
                    updateErrorList(valid, fieldName);
                    setTextValue(e.target.value);
                  }}
                  regExp={/^[a-zA-ZА-яЁё0-9_., -]{10,}$/g}
                  textError="Минимум 10 букв"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                func={createYourQuote}
                text={'Отправить'}
                type={'secondary'}
                isDisabled={errorList.length > 0}
              />
            </DialogActions>
          </Dialog>
        )}
      </ThemeProvider>
    </div>
  );
}

export default ModalWindow;
