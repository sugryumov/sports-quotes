import React, { useState, useEffect } from 'react';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import FormAuth from '../../components/FormAuth/FormAuth';
import './style.css';
import { getDataToLocalStorage, checkToken } from '../../helpers';

function Admin() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  useEffect(() => {
    if (getDataToLocalStorage('tokenSportsQuotes')) {
      // checkToken(getDataToLocalStorage('expiresInSportsQuotes'), props.password);
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  }, []);

  return (
    <div className="admin">
      {isLogIn ? (
        <AdminPanel />
      ) : (
        <FormAuth
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          setIsLogIn={setIsLogIn}
        />
      )}
    </div>
  );
}

export default Admin;
