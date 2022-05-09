import { combineReducers, createStore  } from 'redux';

import * as reducers from '../reducers';

const useReducer=combineReducers(reducers);

export const store=createStore(useReducer);