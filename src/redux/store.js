import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registration from './reducers/registration';
import wallet from './reducers/wallet';

const store = createStore(
  combineReducers({
    registration,
    wallet,
  }), composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
