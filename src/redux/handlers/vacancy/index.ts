import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancy } from 'interfaces/Vacancy.interface';
import { getVacancyByIdThunk } from 'redux/thunks';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';
import { vacancyFieldMapper } from 'utils/vacancyFieldMapper';

export interface VacancyState {
  data: IVacancy;
  isLoaded: boolean;
}

export const initialState: VacancyState = {
  data: {
    id: 0,
    currency: '',
    paymentAmountFrom: 0,
    paymentAmountTo: 0,
    profession: '',
    town: '',
    typeOfWork: '',
    vacancyRichText: '',
  },
  isLoaded: false,
};

const vacancy = createSlice({
  name: 'vacancy',
  initialState: initialState as VacancyState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacancyByIdThunk.pending, (state: VacancyState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(getVacancyByIdThunk.rejected, (state: VacancyState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(
      getVacancyByIdThunk.fulfilled,
      (
        state: VacancyState,
        { payload }: PayloadAction<getVacancyByIdThunkResponseType>
      ) => {
        state.data = vacancyFieldMapper(payload);
        state.isLoaded = true;

        return state;
      }
    );
  },
});

export default vacancy.reducer;
