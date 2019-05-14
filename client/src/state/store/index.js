import rootReducer from 'state/reducers';

import { createBrowserHistory } from 'history';
// import our logger for redux
import { createLogger } from 'redux-logger';

// import a library to handle async with redux
import thunk from 'redux-thunk';

// import the redux parts needed to start our store
import { createStore, applyMiddleware, compose } from 'redux';

// import the middleware for using react router with redux
import { routerMiddleware } from 'react-router-redux';

// create history
export const history = createBrowserHistory();

// combine the middlewares we're using into a constant so that it can be used by our store
const middleware = [thunk, routerMiddleware(history)];

// declare any enhancers here
const enhancers = [];

// use Redux devtools if available in development
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  middleware.push(createLogger());
}

// compose our middleware
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// create our redux store using our reducers and our middleware, and export it for use in index.js
const store = createStore(rootReducer, composedEnhancers);

export default store;
