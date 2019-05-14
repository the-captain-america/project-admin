import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import shades from '@bupa-digital/shades/react';
import * as serviceWorker from './serviceWorker';
import { Routes } from './routes';
import store from 'state/store';

const domNode = document.querySelector('#root');
ReactDOM.render(
  <shades.Provider to={domNode} showDebug>
    <Provider store={store}>
      <Routes />
    </Provider>
  </shades.Provider>,
  document.querySelector('#root')
);

serviceWorker.unregister();
