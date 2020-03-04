import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import '../assets/styles/global.css';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import StoreProvider from '../context';
import App from '../components/App/App';

export default () => (
  <StoreProvider>
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <App />
    </ErrorBoundary>
  </StoreProvider>
);
