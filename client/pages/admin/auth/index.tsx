import React from 'react';
import StoreProvider from '../../../context/admin';
import FormAuth from '../../../components/FormAuth/FormAuth';

export default function AuthPage() {
  return (
    <StoreProvider>
      <FormAuth />
    </StoreProvider>
  );
}
