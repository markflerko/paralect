import { combineReducers } from '@reduxjs/toolkit';

import savedReducer from './saved';
import vacanciesReducer from './vacancies';
import vacancyReducer from './vacancy';

const rootReducer = combineReducers({
  vacancies: vacanciesReducer,
  saved: savedReducer,
  vacancy: vacancyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
