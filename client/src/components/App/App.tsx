import React, { ReactElement } from 'react';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import './App.css';
import ModalWindow from '../ModalWindow/ModalWindow';

function App(): ReactElement {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Intro />
      </div>
      <Content />
      <Footer />
      <ModalWindow />
    </div>
  );
}

export default App;
