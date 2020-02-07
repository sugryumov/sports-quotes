import React from "react";
import StoreProvider from "../context";
import Header from "../components/Header/Header";
import ErrorBoundary from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import "../assets/styles/global.scss";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <StoreProvider>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <div className="App">
            <div className="bg" />
            <div className="container">
              <Header />
              <Content />
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </StoreProvider>
    </div>
  );
};

export default App;
