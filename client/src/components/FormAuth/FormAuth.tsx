import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';
import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/admin';
import { writeDataToLocalStorage } from '../../helpers';
import { authAdmin } from '../../helpers/services';
import './FormAuth.css';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormAuth() {
  const context = useContext(StoreContext);

  const [showError, setShowError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const classes = useStyles();

  console.log(context.login, context.password);

  const sendEmailAndPassword = (e: any) => {
    e.preventDefault();
    authAdmin(context.login, context.password)
      .then(res => {
        const { token, refreshToken, expiresIn } = res.data;
        writeDataToLocalStorage(token, refreshToken, expiresIn);
        navigate('/admin');
        setShowError(false);
        setErrMessage('');
      })
      .catch(err => {
        console.log(err);
        setShowError(true);
        setErrMessage('Некорректная почта или пароль');
      });
  };

  return (
    <Container component="main" className="auth-page" maxWidth="xs">
      <CssBaseline />
      {/* <img src={logo} alt="img" width="36" height="auto" /> */}
      <Typography component="h1" variant="h5">
        Авторизуйтесь
      </Typography>
      {showError && <div className="auth-page__error">{errMessage}</div>}
      <form className={classes.form} noValidate onSubmit={sendEmailAndPassword}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={e => context.setLogin(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={e => context.setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Войти
        </Button>
      </form>
    </Container>
  );
}
