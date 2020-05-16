import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import Reducers from './reducers/reducers'

const myMoney = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(Reducers, myMoney)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('app'));
