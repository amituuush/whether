import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { throttle } from 'lodash';

import App from './components/app';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(throttle(() => {
  saveState({
    weather: store.getState().weather
  });
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));



// ability to delete cities
// create city detailed view with more information
// add auth
