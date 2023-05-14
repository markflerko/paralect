import { combineReducers } from '@reduxjs/toolkit';

import cataloguesReducer from './catalogues';
import savedReducer from './saved';
import vacanciesReducer from './vacancies';
import vacancyReducer from './vacancy';

const rootReducer = combineReducers({
  catalogues: cataloguesReducer,
  vacancies: vacanciesReducer,
  saved: savedReducer,
  vacancy: vacancyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
