import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './scss/index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import Header from './components/library/Header';

function App() {

  


  return (
    <Provider store={store}>
      <div className="application">

        <BrowserRouter>
          <Header />

          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={AboutPage} />
        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
