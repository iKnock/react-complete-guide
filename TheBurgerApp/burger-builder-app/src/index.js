import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';

const logger = store => {
  return next => {
    return action => {
      console.log('<Middleware> dispatching' + action);
      const result = next(action);
      console.log('<Middleware> next state', store.getState())
      return result;
    }
  }
}

const store = createStore(reducer, applyMiddleware(logger));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
