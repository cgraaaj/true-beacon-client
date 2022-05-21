import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";

import App from './App';
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


