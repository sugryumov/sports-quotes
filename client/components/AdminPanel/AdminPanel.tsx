import React, { ReactElement, useContext } from 'react';
import { StoreContext } from '../../context/admin';

function AdminPanel(): ReactElement {
  const context = useContext(StoreContext);

  // useEffect(() => {
  //   if (getTokenFromLocalStorage('tokenSmarthub')) {
  //     checkToken(getTokenFromLocalStorage('expiresInSmarthub'), password);
  //   } else {
  //     history.push('/auth');
  //   }
  // }, [history, password]);

  return <div className="panel">admin</div>;
}

export default AdminPanel;
