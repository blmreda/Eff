import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore } from 'redux';
import Reducer from './ReduxFormulaire/Reducer';
import { Provider } from 'react-redux';
const Store = legacy_createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
);

