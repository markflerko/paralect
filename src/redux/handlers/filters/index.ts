import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacanciesDto } from 'api/vacancies/types';

const initialState: IVacanciesDto = {};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (
      state: IVacanciesDto,
      { payload }: PayloadAction<IVacanciesDto>,
    ) => {
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { setFilters } = filters.actions;
export default filters.reducer;
