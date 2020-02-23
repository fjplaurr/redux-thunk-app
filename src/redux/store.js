import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import hamburgerReducer from './reducers/hamburgerReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(hamburgerReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
