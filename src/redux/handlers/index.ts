import { combineReducers } from '@reduxjs/toolkit';

import savedReducer from './saved';
import vacancyReducer from './vacancy';

const rootReducer = combineReducers({
  saved: savedReducer,
  vacancy: vacancyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
