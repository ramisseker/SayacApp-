import {createStore, applyMiddleware,combineReducers} from 'redux';
import { Reducers } from './Reducers';
import {user} from './Reducers/user'
import thunk from 'redux-thunk';
let middleWares = [thunk];
const initialState = {};
/*import {createLogger} from 'redux-logger';
if (__DEV__) {
  middleWares.push(createLogger());
}*/

const combinedReducers = combineReducers({
    user
});

const store = createStore(
  combinedReducers,
  initialState,
  applyMiddleware(...middleWares),
);

export default store;
