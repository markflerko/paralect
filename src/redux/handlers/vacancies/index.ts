import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancy } from 'interfaces/Vacancy.interface';
import { getVacanciesThunk } from 'redux/thunks';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';
import { vacancyFieldMapper } from 'utils/vacancyFieldMapper';

export interface VacanciesState {
  data: IVacancy[];
  isLoaded: boolean;
}

export const initialState: VacanciesState = {
  data: [],
  isLoaded: false,
};

const vacancies = createSlice({
  name: 'vacancies',
  initialState: initialState as VacanciesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacanciesThunk.pending, (state: VacanciesState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(getVacanciesThunk.rejected, (state: VacanciesState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(
      getVacanciesThunk.fulfilled,
      (
        state: VacanciesState,
        { payload }: PayloadAction<getVacancyByIdThunkResponseType[]>,
      ) => {
        state.data = payload.map(vacancyFieldMapper);
        state.isLoaded = true;

        return state;
      },
    );
  },
});

export default vacancies.reducer;
