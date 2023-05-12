import { combineReducers } from '@reduxjs/toolkit';

import vacancyReducer from './vacancy';

const rootReducer = combineReducers({
  vacancy: vacancyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
