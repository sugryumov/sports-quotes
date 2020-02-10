import '../style.scss';
import Head from '../components/head';
import StoreProvider from '../context';
import Header from '../components/Header/Header';
import ErrorBoundary from 'react-error-boundary';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import Content from '../components/Content/Content';
import Intro from '../components/Intro/Intro';
import Footer from '../components/Footer/Footer';

export default () => (
  <div className="App">
    <StoreProvider>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Head title="Sport quotes" />
        <Header />
        <Intro />
        <Content />
        <Footer />
      </ErrorBoundary>
    </StoreProvider>
  </div>
);
