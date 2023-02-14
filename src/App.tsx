import React, { VFC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Quiz } from './pages/quiz/quiz';
import { LoadingPage } from './pages/loading';
import { ThankYouPage } from './pages/thankYou';

import './styles/global.css';
import { store } from './state/store';

const App: VFC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
