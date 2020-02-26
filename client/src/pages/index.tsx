import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import '../assets/styles/global.css';
import Content from '../components/Content/Content';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import StoreProvider from '../context';

export default () => (
  <StoreProvider>
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Header />
      <Intro />
      <Content />
      <Footer />
    </ErrorBoundary>
  </StoreProvider>
);
