import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVacanciesAPI } from 'api/vacancies/types';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const getSavedVacanciesThunkCb = (api: IVacanciesAPI) =>
  createAsyncThunk<getVacancyByIdThunkResponseType[], number[]>(
    'savedSlice/saved',
    async (saved: number[], thunkApi) => {
      return await api.getSavedVacancies(saved);
    }
  );

export default getSavedVacanciesThunkCb;
