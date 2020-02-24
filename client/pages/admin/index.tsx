import React from 'react';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import StoreProvider from '../../context/admin';
import './style.scss';

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
