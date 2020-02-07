import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from "../context";
import Header from "./Header/Header";
import ErrorBoundary from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Content from "./Content/Content";
import Intro from "./Intro/Intro";
import Footer from "./Footer/Footer";
import "../assets/styles/global.scss";
// import Container from "@material-ui/core/Container";

function App() {
  return (
    <StoreProvider>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Router>
          <Header />
          <Intro />
          <Content />
          <Footer />
        </Router>
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default App;