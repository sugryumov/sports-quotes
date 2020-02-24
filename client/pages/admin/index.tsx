import React, { useContext } from 'react';
import './style.scss';
import StoreProvider from '../../context/admin';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

function Admin() {
  return (
    <StoreProvider>
      <div className="admin">
        <AdminPanel />
      </div>
    </StoreProvider>
  );
}

export default Admin;
