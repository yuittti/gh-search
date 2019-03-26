import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { userReducer } from './reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { watchLoadUserData } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    user: userReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadUserData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
