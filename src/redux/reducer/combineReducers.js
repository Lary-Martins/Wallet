import { combineReducers } from 'redux';
import registration from './registration';
import wallet from './wallet';

const reducers = combineReducers({
  registration,
  wallet,
});

export default reducers;
