import React from 'react';
import FormAuth from '../../../components/FormAuth/FormAuth';
import StoreProvider from '../../../context/admin';

export default function AuthPage() {
  return (
    <StoreProvider>
      <FormAuth />
    </StoreProvider>
  );
}
