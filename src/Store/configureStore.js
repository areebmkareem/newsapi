import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import news from './Reducers/News';
import {RESET_REDUX_STORE} from './actionTypes';

const appReducer = combineReducers({
  news,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUX_STORE) state = undefined;
  return appReducer(state, action);
};
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
