import { combineReducers } from '@reduxjs/toolkit';

import cataloguesReducer from './catalogues';
import filtersReducer from './filters';
import savedReducer from './saved';
import vacanciesReducer from './vacancies';
import vacancyReducer from './vacancy';

const rootReducer = combineReducers({
  filters: filtersReducer,
  catalogues: cataloguesReducer,
  vacancies: vacanciesReducer,
  saved: savedReducer,
  vacancy: vacancyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
