import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from "../context";
import Header from "../components/Header/Header";
import { getList } from "../helpers/services";
import ErrorBoundary from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import "../assets/styles/global.scss";
import Container from "@material-ui/core/Container";

export interface HelloProps {
  value: string;
}

function App(props: HelloProps) {
  useEffect(() => {
    getList();
  }, []);

  return (
    <StoreProvider>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Router>
          <div className="App">
            <div className="bg" />
            <Container>
              <Header />
              <Content />
              <Footer />
            </Container>
          </div>
        </Router>
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default App;
