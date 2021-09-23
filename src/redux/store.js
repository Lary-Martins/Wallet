import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registration from './reducer/registration';
import wallet from './reducer/wallet';

const store = createStore(
  combineReducers({
    registration,
    wallet,
  }), composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
