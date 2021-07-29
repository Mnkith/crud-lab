import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers } from 'redux';

// import rootReducer from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index'

// const rootReducer = combineReducers({
//   manageRestaurant,
//   // reviews: manageReviews
// // })

let store =createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
